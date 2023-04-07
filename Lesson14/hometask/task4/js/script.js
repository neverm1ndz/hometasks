// Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр
// кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які
// може видати банкомат, та метод зняття деякої суми.

class Banknote {
   #value
   constructor(rate, value) {
      this.rate = rate
      this.Value = value
   }

   get Value() {
      return this.#value
   }

   set Value(val) {
      if (val < 0) throw new Error('Incorrect value')
      this.#value = val
   }

   toString() {
      return `${this.rate} - ${this.Value}`
   }
}

class TBankomat {
   constructor(banknotesList) {
      this.banknotesList = banknotesList
   }

   //--------------METHODS--------------

   get minSum() {
      for (const banknote of this.banknotesList) {
         if (banknote.Value) return banknote.rate
      }
      return 0
   }

   get maxSum() {
      return this.banknotesList.reduce(
         (acc, banknote) => acc + banknote.rate * banknote.Value,
         0
      )
   }

   getMoney(val) {
      if (val < this.minSum || val > this.maxSum)
         throw new Error('Incorrect value')
      for (let i = this.banknotesList.length - 1; i >= 0 && val !== 0; i--) {
         if (val / this.banknotesList[i].rate >= 1) {
            this.banknotesList[i].Value -= Math.floor(
               val / this.banknotesList[i].rate
            )
            val = val % this.banknotesList[i].rate
         }
      }

      if (val > 0)
         document.write(`
            Ваша решта - ${val}грн<br>
            На жаль, наш банкомат не видає купюри менше 5грн, але ви
            можете відправити ${val}грн на благодійність<br>
         `)
   }

   toString() {
      if (this.maxSum === 0) return `В банкоматі немає грошей<br>`
      return `
         Мінімальна сума для видачі - ${this.minSum}<br>
         Максимальна сума для видачі - ${this.maxSum}<br>
         `
   }
}

let banknotesList = [
   new Banknote(5, 50),
   new Banknote(10, 45),
   new Banknote(20, 40),
   new Banknote(50, 35),
   new Banknote(100, 30),
   new Banknote(200, 25),
]

let tBankomat = new TBankomat(banknotesList)
console.log(tBankomat)

console.log(tBankomat.maxSum)
tBankomat.getMoney(762)
console.log(tBankomat)
console.log(tBankomat.maxSum)
