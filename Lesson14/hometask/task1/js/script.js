// Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу toString.

class TDAte {
   #day
   #month
   #year
   constructor(year, month, day) {
      this.Year = year
      this.Month = month
      this.Day = day
   }
   //-----------------------------

   get Day() {
      return this.#day
   }
   get Month() {
      return this.#month
   }
   get Year() {
      return this.#year
   }
   //-----------------------------

   set Day(val) {
      if (val < 1 || val > this.getMonthDaysNumber(this.Month))
         throw new Error('Incorrect day number')
      this.#day = val
   }
   set Month(val) {
      if (val < 1 || val > 12) throw new Error('Incorrect month number')
      this.#month = val
   }
   set Year(val) {
      if (val <= 0) throw new Error('Incorrect year number')
      this.#year = val
   }
   //-----------------------------

   // Функція для визначення кількості днів у місяці
   getMonthDaysNumber(month) {
      let result
      switch (month) {
         case 4:
         case 6:
         case 9:
         case 11:
            result = 30
            break
         case 2:
            this.isLeapYear(this.Year) ? (result = 29) : (result = 28) // якшо лютий то перевіряємо чи рік високосний
            break
         default:
            result = 31
            break
      }
      return result
   }

   // Функція для визначення високосного року
   isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
   }

   increaseYear(val) {
      this.Year += val
   }
   decreaseYear(val) {
      this.Year -= Math.abs(val)
   }
   increaseMonth(val) {
      this.increaseYear(Math.floor((this.Month + val - 1) / 12))
      this.Month = ((this.Month + val - 1) % 12) + 1
   }
   decreaseMonth(val) {
      this.decreaseYear(Math.floor((this.Month - val - 1) / 12))
      this.Month = ((this.Month - (val % 12) + 11) % 12) + 1
   }

   increaseDay(val) {
      let currentDay = this.Day
      let currentMonthDays = this.getMonthDaysNumber(this.Month)
      currentDay += val
      while (currentDay > currentMonthDays) {
         currentDay -= currentMonthDays
         this.increaseMonth(1)
         currentMonthDays = this.getMonthDaysNumber(this.Month)
      }
      this.Day = currentDay
   }
   decreaseDay(val) {
      let currentDay = this.Day
      currentDay -= val
      while (currentDay < 1) {
         this.decreaseMonth(1)
         let currentMonthDays = this.getMonthDaysNumber(this.Month)
         currentDay += currentMonthDays
      }
      this.Day = currentDay
   }

   toString() {
      return `${this.Day} - ${this.Month} - ${this.Year}`
   }
}

let year = parseInt(prompt('Введіть рік'))
let month = parseInt(prompt('Введіть місяць'))
let day = parseInt(prompt('Введіть день'))

let date1 = new TDAte(year, month, day)
document.write(date1)
date1.decreaseDay(3)
console.log(date1)
