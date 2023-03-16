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

// function getNewArray() {
// 	let array = []
// 	let length = parseInt(prompt('Введіть довжину масиву'))
// 	let x = parseInt(prompt('Введіть перший елемент'))
// 	let d = parseInt(prompt('Введіть крок'))
// 	for (let i = x; i <= length * d; i += d) {
// 		array.push(i)
// 	}
// 	return array
// }
// console.log(getNewArray());

// function getNewArray() {
// 	let array = []
// 	let length = parseInt(prompt('Введіть довжину масиву'))
// 	let x = parseInt(prompt('Якому числу повинні бути кратні елементи'))
// 	for (let i = x * length; i > 1; i -= x) {
// 		array.push(i)
// 	}
// 	return array
// }
// console.log(getNewArray());


// function getNewArray() {
// 	let length = parseInt(prompt('Введіть довжину масиву'))
// 	const x = parseInt(prompt(Якому числу повинні бути кратні елементи))
// 	let counter = 0
// 	let array = new Array(length).fill(length * x).map((element) => {
// 		element -= counter
// 		counter += x
// 		return element
// 	}
// 	)
// 	return array
// }
// console.log(getNewArray());

//Заполнить массив заданной длины различными простыми числами. Натуральное число, большее единицы, называется простым, если оно делится только на себя и на единицу.

// function getNewarray() {
// 	let length = parseInt(prompt('Введіть довжину'))
// 	let array = []
// 	numbers: for (let i = 2; length > 0; i++) {
// 		for (let j = 2; j < i; j++) {
// 			if (i % j === 0) continue numbers
// 		}
// 		array.push(i)
// 		length--
// 	}
// 	return array
// }
// console.log((getNewarray()))

// Создать массив, каждый элемент которого равен квадрату своего номера.

// function getNewarray() {
// 	let length = parseInt(prompt('Введіть довжину'))
// 	let array = new Array(length).fill().map((elem, index, array) =>
// 		Math.pow(index, 2)
// 	)
// 	return array
// }
// console.log((getNewarray()))

// // function getNewarray() {
// // 	let n = 10
// // 	let x = 5
// // 	let d = 5
// // 	let array = new Array(n).fill().map((elem, index) => x + d * index)
// // 	return array
// // }
// console.log((getNewarray()))

// Определите, каких чисел в массиве больше: которые делятся на первый элемент массива или которые делятся на последний элемент массива.


// let length = parseInt(prompt('Введіть довжину'))

// function getRandomNum(min, max) {
// 	return min + Math.floor(Math.random() * max - min) + 1
// }

// function getNewArray(length) {
// 	let array = new Array(length).fill().map(() => getRandomNum(1, 20))
// 	return array
// }

// let array = getNewArray(length)

// console.log(array)

// function getMoreNums(array) {
// 	let first = 0
// 	let last = 0
// 	array.forEach(element => {
// 		if (element % array[0] === 0) first += 1
// 		if (element % array.at(-1) === 0) last += 1
// 	});
// 	if (first > last) return `На перший діляться більше - ${first}`
// 	else if (last > first) return `На останній діляться більше - ${last}`
// 	else return `Однаково - ${first} ${last} `
// }

// console.log(getMoreNums(array))

// Найдите сумму и произведение элементов массива.

// let length = parseInt(prompt('Введіть довжину'))

// function getRandomNum(min, max) {
// 	return min + Math.floor(Math.random() * max - min) + 1
// }

// function getNewArray(length) {
// 	let array = new Array(length).fill().map(() => getRandomNum(1, 10))
// 	return array
// }

// let array = getNewArray(length)
// console.log(array)

// function getSumArray(array) {
// 	return array.reduce((acc, elem) =>
// 		acc += elem
// 	)
// }

// function getProductArray(array) {
// 	return array.reduce((acc, elem) =>
// 		acc *= elem
// 		, 1)
// }

// console.log(`Сума = ${getSumArray(array)}`)
// console.log(`Добуток = ${getProductArray(array)}`)

// Найдите сумму чисел массива, которые стоят на нечетных местах и при этом превосходят сумму крайних элементов массива.

// let length = parseInt(prompt('Введіть довжину'))

// function getRandomNum(min, max) {
// 	return min + Math.floor(Math.random() * max - min) + 1
// }

// function getNewArray(length) {
// 	let array = new Array(length).fill().map(() => getRandomNum(1, 20))
// 	return array
// }

// let array = getNewArray(length)
// console.log(array)

// function getSum(array) {
// 	return array.reduce((acc, elem, index, array) => {
// 		if (index % 2 !== 0 && elem > array[0] + array.at(-1)) return acc += elem
// 		else return acc
// 	}
// 		, 0)
// }
// console.log(getSum(array))


// Дан массив x из n элементов. Найдите x1−x2+x3−…−xn−1+xn.

// let length = parseInt(prompt('Введіть довжину'))

// function getRandomNum(min, max) {
// 	return min + Math.floor(Math.random() * max - min) + 1
// }

// function getNewArray(length) {
// 	let array = new Array(length).fill().map(() => getRandomNum(1, 20))
// 	return array
// }

// let array = getNewArray(length)
// console.log(array)

// function getResult(array) {
// 	return array.reduce((acc, elem, index) => {
// 		if (index % 2 === 0) return acc += elem
// 		else return acc -= elem
// 	})
// }
// console.log((getResult(array)))


// Дан массив. Найдите три последовательных элемента в массиве, сумма которых максимальна.

// let length = parseInt(prompt('Введіть довжину'))

// function getRandomNum(min, max) {
// 	return min + Math.floor(Math.random() * max - min) + 1
// }

// function getNewArray(length) {
// 	let array = new Array(length).fill().map(() => getRandomNum(1, 20))
// 	return array
// }

// let array = getNewArray(length)
// console.log(array)

// function getMaxSumOf_3(array) {
// 	let max = 0
// 	let maxArray = new Array(3)
// 	for (let i = 1; i < array.length - 1; i++) {
// 		if (array[i - 1] + array[i] + array[i + 1] > max) {
// 			max = array[i - 1] + array[i] + array[i + 1]
// 			maxArray[0] = array[i - 1]
// 			maxArray[1] = array[i]
// 			maxArray[2] = array[i + 1]
// 		}
// 	}
// 	return maxArray
// }

// console.log(getMaxSumOf_3(array))


// В данном массиве найдите количество чисел, соседи у которых отличаются более чем в 2 раза.

// let length = parseInt(prompt('Введіть довжину'))

// function getRandomNum(min, max) {
// 	return min + Math.floor(Math.random() * max - min) + 1
// }

// function getNewArray(length) {
// 	let array = new Array(length).fill().map(() => getRandomNum(1, 20))
// 	return array
// }

// let array = getNewArray(length)
// console.log(array)

// function findResult(array) {
// 	return array.reduce((acc, elem, index, array) => {
// 		if (array[index - 1] > elem * 2 && array[index + 1] > elem * 2)
// 			acc += 1
// 		return acc
// 	}, 0)
// }
// console.log(findResult(array))


// Сформировать убывающий массив из чисел, которые делятся на 3.


// let length = parseInt(prompt('Введіть довжину'))
// let num = parseInt(prompt('Якому числу кратні елементи'))

// function getNewArray(length, num) {
// 	let array = new Array(length).fill().reduce((acc, elem, index) => {
// 		if (index === 0) {
// 			elem = length * num
// 			return [elem]
// 		}
// 		return [...acc, acc[index - 1] - num]
// 	}, [])
// 	return array
// }
// console.log(getNewArray(length, num))


// В массиве заменить все числа, большие данного числа, на среднее арифметическое всех чисел массива.

let length = parseInt(prompt('Введіть довжину'))
let userNumber = parseInt(prompt('Введіть число'))


function getRandomNum(min, max) {
	return min + Math.floor(Math.random() * max - min) + 1
}

function getNewArray(length) {
	let array = new Array(length).fill().map(() => getRandomNum(1, 10))
	return array
}

function getAverage(array, length) {
	return array.reduce((acc, elem, index) => {
		if (index === length - 1) return (acc + elem) / length
		return acc + elem
	})
}

function replaceBiggerAverage(array, averageValue, userNumber) {
	return array.map(elem => {
		if (elem > userNumber) return averageValue
		else return elem
	})
}

let array = getNewArray(length)
let averageValue = getAverage(array, length)
let newArray = replaceBiggerAverage(array, averageValue, userNumber)

console.log(array)
console.log(newArray)

