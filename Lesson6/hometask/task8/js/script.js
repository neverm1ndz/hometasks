//  Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.

function getRandomNum() {
   let randomNum = (-500) + Math.floor(Math.random() * 1001)
   return randomNum
}

function getListRandomNums(elementsNum) {
   let array = []
   for (let i = 0; i < elementsNum; i++) {
      const randomNum = getRandomNum()
      array.push(randomNum)
   }
   return array
}

function getReward(list) {
   let sum = 0
   let usersNum
   do {
      usersNum = parseInt(prompt('Введіть номер елемента'))
      if (isFinite(usersNum))
         sum += list[usersNum - 1]
   }
   while (isFinite(usersNum))
   return sum
}

const listRandomNums = getListRandomNums(10)
const usersReward = getReward(listRandomNums)

if (usersReward > 0) document.write(`Ви виграли ${usersReward}`)
else document.write(`Ви програли ${usersReward}`)

console.log(listRandomNums);
