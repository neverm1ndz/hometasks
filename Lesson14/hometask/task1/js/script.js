// Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу toString.

class TDAte {
   #day
   #month
   #year
   constructor() {
      this.Day = 1
      this.Month = 1
      this.Year = 1
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
      if (val < 1 || val > 31) throw new Error('Incorrect day number')
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

   increaseYear(val) {
      this.Year += val
   }
   decreaseYear(val) {
      this.Year -= Math.abs(val)
   }
   increaseMonth(val) {
      this.increaseYear(Math.floor((this.Month + val) / 12))
      this.Month = ((this.Month - 1 + val) % 12) + 1
   }
   decreaseMonth(val) {
      this.decreaseYear(Math.floor((this.Month - val - 1) / 12))
      this.Month = ((this.Month - (val % 12) + 11) % 12) + 1
   }

   increaseDay(val) {
      this.increaseMonth(Math.floor((this.Day + val) / 30))
      this.Day = ((this.Day - 1 + val) % 30) + 1
   }
   decreaseDay(val) {
      this.decreaseMonth(Math.ceil(Math.abs(this.Day - val - 1) / 30))
      this.Day = ((this.Day - (val % 30) + 29) % 30) + 1
   }

   toString() {
      this.Day = parseInt(prompt('Введіть день'))
      this.Month = parseInt(prompt('Введіть місяць'))
      this.Year = parseInt(prompt('Введіть рік'))
      return `${this.Day} - ${this.Month} - ${this.Year}`
   }
}

let date1 = new TDAte()
document.write(date1)
date1.decreaseDay(25)
console.log(date1)
