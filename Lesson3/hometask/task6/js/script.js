// 6. З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

const enteredDayNum = parseInt(prompt('Введіть номер дня тижня', ''))

if (enteredDayNum === 1)
   document.write(`
<p>Понеділок</p>
`)
else if (enteredDayNum === 2)
   document.write(`
<p>Вівторок</p>
`)
else if (enteredDayNum === 3)
   document.write(`
<p>Середа</p>
`)
else if (enteredDayNum === 4)
   document.write(`
<p>Четвер</p>
`)
else if (enteredDayNum === 5)
   document.write(`
<p>П'ятниця</p>
`)
else if (enteredDayNum === 6)
   document.write(`
<p>Субота</p>
`)
else if (enteredDayNum === 7)
   document.write(`
<p>Неділя</p>
`)
else
   document.write(`
<p>Некоректний номер дня</p>
`)
