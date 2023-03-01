//  Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення. 

function getSum(num1, num2, num3, num4) {
   return num1 + num2 + num3 + num4
}

function getProduct(num1, num2, num3, num4) {
   return num1 * num2 * num3 * num4
}

function getAverageNum(num1, num2, num3, num4) {
   return (num1 + num2 + num3 + num4) / 4
}

function getMinNum(num1, num2, num3, num4) {
   let minNum = num1
   if (num2 < minNum) minNum = num2
   if (num3 < minNum) minNum = num3
   if (num4 < minNum) minNum = num4
   return minNum
}

const num1 = parseFloat(prompt('Введіть перше число'))
const num2 = parseFloat(prompt('Введіть друге число'))
const num3 = parseFloat(prompt('Введіть третє число'))
const num4 = parseFloat(prompt('Введіть четверте число'))

const numSum = getSum(num1, num2, num3, num4)
const numProduct = getProduct(num1, num2, num3, num4)
const numAverage = getAverageNum(num1, num2, num3, num4)
const numMin = getMinNum(num1, num2, num3, num4)

document.write(`
Сума = ${numSum}<br>
Добуток = ${numProduct}<br>
Середнє арифметичне = ${numAverage}<br>
Мінімальне = ${numMin}<br>
`)
