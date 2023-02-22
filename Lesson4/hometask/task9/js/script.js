// 8. Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).

alert('Загадайте число від 1 до 20')
let usersNum

do {
   let computersNum = 1 + Math.floor(Math.random() * 20)
   usersNum = confirm(`Ваше число ${computersNum}?`)
   if (usersNum === true)
      alert('Повезло =)')
   else
      alert('Не повезло =(')
}
while (usersNum !== true)
