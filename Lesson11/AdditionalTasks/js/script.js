// Сортування вставками

let array = [1, 2, 3, 4, 5, 6, 7, 8, 5, 9, 0]

function isSameElement(array) {
	for (let i = 0; i < array.length - 1; i++) {
		const currentEl = array[i]
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] === currentEl) return true
		}
	}
	return false
}

console.log(isSameElement(array))



