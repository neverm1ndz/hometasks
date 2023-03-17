// Сортування вставками
arr = [5, 3, 7, 9, 2, 3, 6, 3, 1, 4, 7, 4, 3]

function insertSort(arr) {
	for (let k = 1; k < arr.length; k++) {
		let currentEl = arr[k]
		let i = k - 1
		while (i >= 0 && arr[i] > currentEl) {
			arr[i + 1] = arr[i]
			i--
		}
		arr[i + 1] = currentEl
	}
	return arr
}

console.log(insertSort(arr));

// Бінарний пошук

function binarySearch(arr, searchNum) {
	let start = 0
	let end = arr.length - 1

	while (start <= end) {
		let middle = Math.floor((start + end) / 2)
		if (arr[middle] > searchNum) end = middle - 1
		else if (arr[middle] < searchNum) start = middle + 1
		else return true
	}
	return false
}

console.log(binarySearch(arr, 0));