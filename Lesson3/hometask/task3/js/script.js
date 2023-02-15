// 3. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

const randomNum = 1 + Math.floor(Math.random() * 5)
let enteredNum = parseInt(prompt('Спробуйте вгадати число від 1 до 5 (1 спроба)', ''))

if ((enteredNum < 1) || (enteredNum > 5))
   document.write(`
<p>Ви ввели некоректне число</p>
`)
else if (enteredNum === randomNum)
   document.write(`
<p>Випадкове число - ${randomNum}</p>
<p>Введене число - ${enteredNum}</p>
<p>Вітаємо, ви вгадали число</p>
`)
else {
   alert('Залишилась одна спроба')
   enteredNum = parseInt(prompt('Спробуйте вгадати число від 1 до 5 (2 спроба)', ''))
   if (enteredNum === randomNum)
      document.write(`
<p>Випадкове число - ${randomNum}</p>
<p>Введене число - ${enteredNum}</p>
<p>Вітаємо, ви вгадали число</p>
`)
   else
      document.write(`
<p>Випадкове число - ${randomNum}</p>
<p>Ви не вгадали число</p>
`)
}