// 1.  Сгенерируйте серию случайных чисел из 0, 1, 2 так, чтобы количество двоек было равно количеству нулей.

// const nums = parseInt(prompt('Введіть кількість чисел'))
// let zero = 0
// let two = 0
// let end = nums

// for (let i = 0; i < nums; i++) {
// 	let random = Math.floor(Math.random() * 3)

// 	if (zero >= end - 1 && zero > two) {
// 		random = 2
// 	}
// 	else if (two >= end - 1 && two > zero) {
// 		random = 0
// 	}
// 	else if ((zero === two) && (i === nums - 1)) {
// 		random = 1
// 	}

// 	if (random === 0) zero += 1
// 	else if (random === 2) two += 1

// 	end -= 1

// 	document.write(`${random}`)
// }

// document.write(`<br>${zero} <br> ${two}`)



// 2. Танчики. На полі з 10 клітинок розміщують танк. За один крок танк може переміщуватися на відстань від 0 до 1 у  будь-якому напрямку (в межах поля). При влучанні броня танка пошкоджується на 30 балів (всього 100). Гра продовжується поки або не закінчаться снаряди (кількість вводиться з клавіатури) або не буде влучання.

// let position = 1 + Math.floor(Math.random() * 10)
// let health = 100
// let shells = parseInt(prompt('Введіть кількість снарядів'))

// do {
// 	let step
// 	let shot = parseInt(prompt(`${position} Введіть номер клітинки для пострілу`))
// 	if (shot > 10 || shot < 1 || !isFinite(shot)) {
// 		alert('Некоректний номер клітинки')
// 		console.log(shot)
// 		continue
// 	}
// 	if (shot === position) {
// 		health -= 30
// 		if (health > 0)
// 			alert(`Ви підбили танк, у нього залишилось ${health} броні`)
// 	}
// 	else alert('Ви промахнулись')
// 	if (position === 10) step = (-1) + Math.floor(Math.random() * 2)
// 	else if (position === 1) step = Math.floor(Math.random() * 2)
// 	else step = -1 + Math.floor(Math.random() * 3)
// 	shells -= 1
// 	position += step
// 	alert(`Залишилось ${shells}`)
// }

// while (health > 0 && shells !== 0)

// if (health < 0) alert('Ви знищили танк')
// else if (shells === 0) alert('У вас закінчились снаряди')

// let array = [1, 2, 3, 4, 5, 6, 7, 8]

// function getArray(...array) {
// 	let counter = 0
// 	let sum = 0
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] % 2 === 0) {
// 			counter++
// 			sum += array[i]
// 		}
// 	}
// 	console.log(sum);

// 	return sum / counter
// }

// console.log(getArray(...array));

let a = 7.000
if (a % 1 === 0) console.log('ok')
else console.log('no');


