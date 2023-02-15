// 1. З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

const childOneName = prompt('Введіть ім\'я першої дитини', '')
const candiesChildOne = parseInt(prompt('Введіть кількість цукерок у першої дитини', ''))
const childTwoName = prompt('Введіть ім\'я другої дитини', '')
const candiesChildTwo = parseInt(prompt('Введіть кількість цукерок у другої дитини', ''))

if (candiesChildOne > candiesChildTwo)
   document.write(`
<p>${childOneName} має більше цукерок</p>
`)
else if (candiesChildOne < candiesChildTwo)
   document.write(`
<p>${childTwoName} має більше цукерок</p>
`)
else
   document.write(`
<p>Кількість цукерок однакова</p>
`)