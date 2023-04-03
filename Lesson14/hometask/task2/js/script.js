// Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.

class TMoney {
   #balance
   #exchangeRate
   constructor(balance, exchangeRate) {
      this.ExchangeRate = exchangeRate
      this.Balance = balance
   }

   //---------------------------
   get Balance() {
      return this.#balance
   }
   get ExchangeRate() {
      return this.#exchangeRate
   }

   //---------------------------
   set Balance(val) {
      if (val < 0) throw new Error('У вас не вистачає коштів')
      this.#balance = Math.round((val / this.ExchangeRate) * 100) / 100
   }
   set ExchangeRate(val) {
      if (val < 0) throw new Error('Не правильне значення')
      this.#exchangeRate = val
   }

   //---------------------------
   increaseBalance(val) {
      this.Balance = this.Balance * this.ExchangeRate + val
   }
   decreaseBalance(val) {
      this.Balance = this.Balance * this.ExchangeRate - val
   }
   getProfitableExchangeRate() {
      let balanceGRN = this.Balance * this.ExchangeRate
      return (
         Math.round(
            (((balanceGRN + 100) * this.ExchangeRate) / balanceGRN) * 100
         ) / 100
      )
   }
   toString() {
      return `
      Balance - ${this.Balance}<br>
      Exchange rate - ${this.ExchangeRate}<br>
      Profitable exchange rate - ${this.getProfitableExchangeRate()}
      `
   }
}

let money1 = new TMoney(760, 38)
console.log(money1)
money1.increaseBalance(380)
console.log(money1)
document.write(money1)
