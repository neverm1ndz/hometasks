// 8. Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).

alert('Загадайте число від 1 до 20')

for (let i = 0; i < 3; i++) {
   let computersNum = 1 + Math.floor(Math.random() * 20)
   let usersNum = confirm(`Ваше число ${computersNum}?`)
   if (usersNum === true) {
      alert('Повезло =)')
      break
   }
   else
      alert('Не повезло =(')
}