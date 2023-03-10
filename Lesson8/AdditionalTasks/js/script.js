//1. Заполнить массив последовательными нечетными числами, начиная с единицы.

// function getNewArray() {
// 	let array = []
// 	let length = parseInt(prompt('Введіть довжину масиву'))
// 	for (let i = 1; i <= (length * 2); i += 2) {
// 		array.push(i)
// 	}
// 	return array
// }
// console.log(getNewArray());

function getNewArray() {
	let array = []
	let length = parseInt(prompt('Введіть довжину масиву'))
	let x = parseInt(prompt('Введіть перший елемент'))
	let d = parseInt(prompt('Введіть крок'))
	for (let i = x; i <= length * d; i += d) {
		array.push(i)
	}
	return array
}
console.log(getNewArray());