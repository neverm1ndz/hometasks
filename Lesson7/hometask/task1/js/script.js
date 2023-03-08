// Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.

function getArrayNulls(elemsNum) {
   return new Array(elemsNum).fill(0)
}

const elemsNum = parseInt(prompt('Введіть кількість елементів'))
const arrayNulls = getArrayNulls(elemsNum)

console.log(arrayNulls);




