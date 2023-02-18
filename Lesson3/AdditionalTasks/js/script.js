// 1. Смайлики

// const enteredNum = parseInt(prompt('Введіть номер пункту\n1. Веселий\n2. Сумний\n3. Обурений', ''))

// if (enteredNum < 1 || enteredNum > 3)
// 	alert('Некоректний номер')
// else if (enteredNum === 1)
// 	alert(':)')
// else if (enteredNum === 2)
// 	alert(':(')
// else
// 	alert('>:(')

// 2. Задача 2. Комп’ютер випадковим чином вибирає початок і кінець проміжку (проміжок повинен знаходитися в межах від 1 до 100). Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку, або розташоване від нього (від лівого або правого краю) не більше ніж на 10.

// const intervalMin = 1 + Math.floor(Math.random() * 50);
// const intervalMax = 51 + Math.floor(Math.random() * 50);
// const enteredNum = parseInt(prompt("Введіть число від 1 до 100", ""));

// if (enteredNum >= intervalMin - 10 && enteredNum <= intervalMax + 10)
//    document.write(`
// <p>Інтервал від ${intervalMin} до ${intervalMax}</p>
// <p>Ваше число ${enteredNum}</p>
// Вітаю, ви вгадали
// `)
// else
//    document.write(`
// <p>Інтервал від ${intervalMin} до ${intervalMax}</p>
// <p>Ваше число ${enteredNum}</p>
// Спробуйте ще раз
// `)

// 3. Комп’ютер загадує число від 1 до 10. Двоє користувачів надають свої відповіді. Виграє той, у кого число знаходиться ближче до загаданого комп’ютером числа.

// const randomNum = 1 + Math.floor(Math.random() * 10)
// const firstUserNum = parseInt(prompt('Користувач 1, введіть число від 1 до 10', ''))
// const secondUserNum = parseInt(prompt('Користувач 2, введіть число від 1 до 10', ''))

// if (Math.abs(firstUserNum - randomNum) < Math.abs(secondUserNum - randomNum))
//    document.write(`
// <p>Випадкове число - ${randomNum}</p>
// <p>Користувач 1 - ${firstUserNum}</p>
// <p>Користувач 2 - ${secondUserNum}</p>
// Виграв користувач 1
// `)
// else if (Math.abs(firstUserNum - randomNum) > Math.abs(secondUserNum - randomNum))
//    document.write(`
// <p>Випадкове число - ${randomNum}</p>
// <p>Користувач 1 - ${firstUserNum}</p>
// <p>Користувач 2 - ${secondUserNum}</p>
// Виграв користувач 2
// `)
// else document.write(`
// <p>Випадкове число - ${randomNum}</p>
// <p>Користувач 1 - ${firstUserNum}</p>
// <p>Користувач 2 - ${secondUserNum}</p>
// <p>Нічия</p>
// `)

// 4. Морський бій. Ворожий корабель, може знаходитись в одному із квадратів (кількість квадратів вводиться з клавіатури), які розташовані лінійно (один за одним) на річці.

// Позиція корабля визначається комп’ютером випадковим чином.
// Гра відбувається за правилами:
// 1) якщо користувач стріляє у заданий квадрат (тобто вводиться номер квадрата), то корабель потоплено;
// 2) якщо корабель знаходиться у сусідньому по відношенню до квадрата, де знаходиться корабель, то корабель пошкоджено (про це повідомляємо користувача).
// За два постріли спробувати потопити корабель.

// const squareNum = parseInt(prompt('Введіть кількість квадратів', ''))
// const shipPos = 1 + Math.floor(Math.random() * squareNum)
// let shot = parseInt(prompt(`${shipPos} Зробіть постріл`, ''))

// if (shot === shipPos)
//    document.write(`
// <p>Квадратів ${squareNum}</p>
// <p>Позиція корабля ${shipPos}</p>
// <p>Постріл у квадрат ${shot}</p>
// <p>Корабель потоплено</p>
// `)
// else if (Math.abs(shipPos - shot) === 1) {
//    alert('Корабель пошкоджено')
//    shot = parseInt(prompt(`Зробіть другий постріл`, ''))
//    if (shot !== shipPos)
//       document.write(`
//    <p>Квадратів ${squareNum}</p>
//    <p>Позиція корабля ${shipPos}</p>
//    <p>Постріл у квадрат ${shot}</p>
//    <p>На жаль, ви програли</p>
//    `)
//    else
//       document.write(`
//    <p>Квадратів ${squareNum}</p>
//    <p>Позиція корабля ${shipPos}</p>
//    <p>Постріл у квадрат ${shot}</p>
//    <p>Корабель потоплено</p>
//    `)

// } else {
//    alert('Ви промахнулись')
//    shot = parseInt(prompt(`Зробіть другий постріл`, ''))
//    if (shot !== shipPos)
//       document.write(`
//       <p>Квадратів ${squareNum}</p>
//       <p>Позиція корабля ${shipPos}</p>
//       <p>Постріл у квадрат ${shot}</p>
//       <p>На жаль, ви програли</p>
// `)
//    else
//       document.write(`
//       <p>Квадратів ${squareNum}</p>
//       <p>Позиція корабля ${shipPos}</p>
//       <p>Постріл у квадрат ${shot}</p>
//       <p>Корабель потоплено</p>
// `)
// }

// 5. Модифікувати попередню задачу з можливістю після пострілу переміщення корабля у випадковим чином вибрану сусідню клітинку (якщо звичайно корабель не було потоплено за першим разом).

// const squareNum = parseInt(prompt('Введіть кількість квадратів', ''))
// let shipPos = 1 + Math.floor(Math.random() * squareNum)
// let shot = parseInt(prompt(`${shipPos} Зробіть постріл`, ''))

// if (shot === shipPos)
//    document.write(`
// <p>Квадратів ${squareNum}</p>
// <p>Позиція корабля ${shipPos}</p>
// <p>Постріл у квадрат ${shot}</p>
// <p>Корабель потоплено</p>
// `)
// else if (Math.abs(shipPos - shot) === 1) {
//    alert('Корабель пошкоджено')
//    shot = parseInt(prompt(`Зробіть другий постріл`, ''))
//    if (shot !== shipPos)
//       document.write(`
//    <p>Квадратів ${squareNum}</p>
//    <p>Позиція корабля ${shipPos}</p>
//    <p>Постріл у квадрат ${shot}</p>
//    <p>На жаль, ви програли</p>
//    `)
//    else
//       document.write(`
//    <p>Квадратів ${squareNum}</p>
//    <p>Позиція корабля ${shipPos}</p>
//    <p>Постріл у квадрат ${shot}</p>
//    <p>Корабель потоплено</p>
//    `)

// } else {
//    alert('Ви промахнулись')
//    shipPos = (shipPos - 1) + Math.floor(Math.random() * 3)
//    shot = parseInt(prompt(`${shipPos} Зробіть другий постріл`, ''))
//    if (shot !== shipPos)
//       document.write(`
//       <p>Квадратів ${squareNum}</p>
//       <p>Позиція корабля ${shipPos}</p>
//       <p>Постріл у квадрат ${shot}</p>
//       <p>На жаль, ви програли</p>
// `)
//    else
//       document.write(`
//       <p>Квадратів ${squareNum}</p>
//       <p>Позиція корабля ${shipPos}</p>
//       <p>Постріл у квадрат ${shot}</p>
//       <p>Корабель потоплено</p>
// `)
// }

// 6. Полювання. Заєць знаходиться у верхньому лівому кутку поля. Поле складається з двох рядків і двох стовпців.
// За один крок заєць може стрибнути у будь-яку із вільних клітинок. Користувач ставить пастку вказуючи номер рядка і стовпця клітинки. Якщо заєць потрапляє у пастку, то користувач виграв і отримав 100 балів. Якщо користувач зловить зайця за другою спробою, то одержує 50 балів.

// let rabbitRowNum = 1
// let rabbitColumnNum = 1
// rabbitRowNum = 1 + Math.floor(Math.random() * 2)
// rabbitColumnNum = 1 + Math.floor(Math.random() * 2)
// let userRowNum = parseInt(prompt(`${rabbitRowNum} ${rabbitColumnNum} Введіть номер рядка`, ''))
// let userColumnNum = parseInt(prompt('Введіть номер стовбця', ''))

// if (userRowNum === rabbitRowNum && userColumnNum === rabbitColumnNum)
//   alert('Зайця впіймано. Ваш результат 100 балів')
// else {
//   rabbitRowNum = 1 + Math.floor(Math.random() * 2)
//   rabbitColumnNum = 1 + Math.floor(Math.random() * 2)

//   alert(`${rabbitRowNum} ${rabbitColumnNum} Друга спроба`)

//   userRowNum = parseInt(prompt('Введіть номер рядка', ''))
//   userColumnNum = parseInt(prompt('Введіть номер стовбця', ''))

//   if (userRowNum === rabbitRowNum && userColumnNum === rabbitColumnNum)
//     alert('Зайця впіймано. Ваш результат 50 балів')

//   else alert('Ви програли :(')
// }

// 7. Гра в кості. Правила гри:
// 1) користувач може кинути кості не більше двох разів (користувач сам вирішує чи робити, чи не робити другий кидок);
// 2) якщо випадає парне число, то кількість балів збільшується на це число;
// 3) якщо випадає непарне число, то кількість балів зменшується на це число;
// 4) виграє той, у кого кількість балів більша.

// let scoreUserOne = 0
// let scoreUserTwo = 0

// alert('Користувач 1 кидає кубики')

// let diceOne = 1 + Math.floor(Math.random() * 6)
// let diceTwo = 1 + Math.floor(Math.random() * 6)
// let diceResult = diceOne + diceTwo

// if (diceResult % 2 === 0)
//    scoreUserOne += diceResult

// let confirmResult = confirm(`Кубик 1 - ${diceOne}\nКубик 2 - ${diceTwo}\nВаш результат = ${scoreUserOne}. Хочете кинути ще раз?`)

// if (confirmResult) {
//    alert('Користувач 1 кидає кубики')

//    diceOne = 1 + Math.floor(Math.random() * 6)
//    diceTwo = 1 + Math.floor(Math.random() * 6)
//    diceResult = diceOne + diceTwo

//    if (diceResult % 2 === 0)
//       scoreUserOne += diceResult
//    else
//       scoreUserOne -= diceResult

//    if (Math.sign(scoreUserOne) === -1)
//       scoreUserOne = 0

//    alert(`Кубик 1 - ${diceOne}\nКубик 2 - ${diceTwo}\nВаш результат = ${scoreUserOne}`)
// }

// alert('Користувач 2 кидає кубики')

// if (diceResult % 2 === 0)
//    scoreUserTwo += diceResult

// confirmResult = confirm(`Кубик 1 - ${diceOne}\nКубик 2 - ${diceTwo}\nВаш результат = ${scoreUserTwo}. Хочете кинути ще раз?`)

// if (confirmResult) {
//    alert('Користувач 2 кидає кубики')

//    diceOne = 1 + Math.floor(Math.random() * 6)
//    diceTwo = 1 + Math.floor(Math.random() * 6)
//    diceResult = diceOne + diceTwo

//    if (diceResult % 2 === 0)
//       scoreUserTwo += diceResult
//    else
//       scoreUserTwo -= diceResult

//    if (Math.sign(scoreUserTwo) === -1)
//       scoreUserTwo = 0

//    alert(`Кубик 1 - ${diceOne}\nКубик 2 - ${diceTwo}\nВаш результат = ${scoreUserTwo}`)
// }

// document.write(`
// <p>Результат користувача 1 = ${scoreUserOne}</p>
// <p>Результат користувача 2 = ${scoreUserTwo}</p>
// `)

// if (scoreUserOne > scoreUserTwo)
//    document.write(`
// <p>Користувач 1 - переміг</p>
// `)
// else if (scoreUserOne < scoreUserTwo)
//    document.write(`
// <p>Користувач 2 - переміг</p>
// `)
// else
//    document.write(`
// <p>Нічия</p>
// `)

// 8. Знайти 2 найбільші числа з 4







