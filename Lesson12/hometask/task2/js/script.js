// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.

const day = parseInt(prompt('Введіть день'))
const month = parseInt(prompt('Введіть місяць'))
const year = parseInt(prompt('Введіть рік'))
const N = parseInt(prompt('Введіть N'))

let testObj = {
   day,
   month,
   year
}

function getYearAfterNMonths(obj, n) {
   obj.year += Math.floor((obj.month - 1 + n) / 12)
   obj.month = (obj.month - 1 + n) % 12 + 1
   return obj
}

console.log(testObj)
console.log(getYearAfterNMonths(testObj, N))



