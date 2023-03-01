// Створити окремі функції, які переводять:
// 1) Сантиметри у дюйми;
// 2) Кілограми у фунти;
// 3) Кілометри у милі.

function getInches(num) {
   const oneInch = 2.54
   return num / oneInch
}

function getPounds(num) {
   const onePound = 0.45
   return num / onePound
}

function getMiles(num) {
   const oneMile = 1.61
   return num / oneMile
}

const num = parseFloat(prompt('Введіть число'))

const inches = getInches(num)
const pounds = getPounds(num)
const miles = getMiles(num)

document.write(`
${num} см - це ${inches.toFixed(2)} дюйми <br>
${num} кг - це ${pounds.toFixed(2)} фунти <br>
${num} км - це ${miles.toFixed(2)} милі <br>
`)