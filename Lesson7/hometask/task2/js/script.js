// 2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7 - ками.

function getNewArray(elemsNum) {
  return new Array(elemsNum).fill(1)
}

function getArrayWithSevens(elemsNum) {
  let array = getNewArray(elemsNum)
  let secondHalf = elemsNum / 2
  return array.fill(7, secondHalf)
}

const elemsNum = parseInt(prompt('Введіть кількість елементів'))
const arrayWithSevens = getArrayWithSevens(elemsNum)

console.log(arrayWithSevens)











