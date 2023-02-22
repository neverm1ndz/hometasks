// 8. Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.

const minNum = parseInt(prompt('Введіть початок проміжку', ''))
const maxNum = parseInt(prompt('Введіть кінець проміжку', ''))
let oddNumberSum = 0

for (let i = minNum; i <= maxNum; i++) {
   if (i % 2 !== 0)
      oddNumberSum += i
}
document.write(`
Сума непарних чисел в проміжку між ${minNum} та ${maxNum} = ${oddNumberSum}
`)