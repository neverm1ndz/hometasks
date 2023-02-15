// 4. З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

const userAge = parseInt(prompt('Введіть вік людини', ''))

if (userAge <= 0)
   document.write(`
<p>Некоректне значення</p>
`)
else if (userAge < 7)
   document.write(`
<p>Це дитина в садочку</p>
`)
else if (userAge < 17)
   document.write(`
<p>Це школяр</p>
`)
else if (userAge < 23)
   document.write(`
<p>Це студент</p>
`)
else if (userAge < 60)
   document.write(`
<p>Це працівник</p>
`)
else
   document.write(`
<p>Це пенсіонер</p>
`)

