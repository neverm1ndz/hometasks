//   Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.

function getArray(elemsNum) {
   let array = new Array(elemsNum).fill(7)
   return array.fill(1, 0, 5)
}

let elemsNum = parseInt(prompt('Введіть кількість елементів'))
let array = getArray(elemsNum)

console.log(array);


