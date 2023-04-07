// Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)

class arrOperations {
   static positiveNumbers(arr) {
      return arr.reduce((acc, el) => (el > 0 ? ++acc : acc), 0)
   }
   static negativeNumbers(arr) {
      return arr.reduce((acc, el) => (el < 0 ? ++acc : acc), 0)
   }
   static numberQuantity(arr, num) {
      return arr.reduce((acc, el) => (el === num ? ++acc : acc), 0)
   }
}

let arr = [2, 4, 5, 0, -2, -3, 6, -3, -2, 8]

console.log(
   arrOperations.positiveNumbers(arr),
   arrOperations.negativeNumbers(arr),
   arrOperations.numberQuantity(arr, -2)
)
