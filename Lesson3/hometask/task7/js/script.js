// 7. З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

const enteredMonthNum = parseInt(prompt('Введіть номер місяця', ''))

if ((enteredMonthNum <= 0) || (enteredMonthNum > 12))
   document.write(`
<p>Некоректний номер</p>
`)
else if ((enteredMonthNum <= 2) || (enteredMonthNum === 12))
   document.write(`
<p>${enteredMonthNum} місяць - це зима</p>
`)
else if (enteredMonthNum <= 5)
   document.write(`
<p>${enteredMonthNum} місяць - це весна</p>
`)
else if (enteredMonthNum <= 8)
   document.write(`
<p>${enteredMonthNum} місяць - це літо</p>
`)
else
   document.write(`
<p>${enteredMonthNum} місяць - це осінь</p>
`)
