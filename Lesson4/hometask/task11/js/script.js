// 8. Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.

const minNum = parseInt(prompt('Введіть початок проміжку'))
const maxNum = parseInt(prompt('Введіть кінець проміжку'))
let oddNumberSum = 0
let counterNum = 0

for (let i = minNum; i <= maxNum; i++) {
   if (i % 2 !== 0 && counterNum < 5) {
      oddNumberSum += i
      counterNum++
   }
}
document.write(`Сума 5 непарних чисел між проміжком від ${minNum} до ${maxNum} = ${oddNumberSum}`)