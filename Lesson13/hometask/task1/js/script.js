// Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, а у
// іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних
// значенням.
// Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

let obj1 = {
   numList: [2, 6, 1, 7, 15, 3, 11, 20, 8, 13, 16, 4, 5],
   getSum: function (min, max) {
      return this.numList.reduce(
         (acc, el) => (el >= min && el <= max ? acc + el : acc),
         0
      )
   },
}
let obj2 = {
   numList: [5, 16, 13, 8, 9, 18, 10, 20, 6, 15, 17, 1, 4],
   getMultiply: function (min, max) {
      return this.numList.reduce(
         (acc, el) => (el >= min && el <= max ? acc * el : acc),
         1
      )
   },
}

let sumObj1 = obj1.getSum(4, 12)
let multiplyObj1 = obj2.getMultiply.call(obj1, 5, 10)

let sumObj2 = obj1.getSum.apply(obj2, [4, 12])
let multiplyObj2 = obj2.getMultiply(5, 10)

console.log(`Сума в першому об'єкті = ${sumObj1}`)
console.log(`Добуток в першому об'єкті = ${multiplyObj1}`)
console.log(`Сума в другому об'єкті = ${sumObj2}`)
console.log(`Добуток в другому об'єкті = ${multiplyObj2}`)
