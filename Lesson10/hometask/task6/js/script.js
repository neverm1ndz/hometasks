//   Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.

let array = ['Ivan', 'Andriy', 'Mary', 'Eugen', 'Olga', 'Olexandr', 'Bogdan']

function getSortArray(array) {
   let changes
   do {
      changes = false
      for (let i = 1; i < array.length; i++) {
         if (array[i - 1].length > array[i].length) {
            let temp = array[i - 1]
            array[i - 1] = array[i]
            array[i] = temp
            changes = true
         }
      }
   } while (changes);
   return array
}

function findElemWithLength(array, findingLength) {
   let start = 0
   let end = array.length - 1
   while (start <= end) {
      let middle = Math.floor((start + end) / 2)
      if (array[middle].length > findingLength) end = middle - 1
      else if (array[middle].length < findingLength) start = middle + 1
      else return true
   }
   return false
}

function findIndexElemWithLength(array, findingLength) {
   let start = 0
   let end = array.length - 1
   while (start <= end) {
      let middle = Math.floor((start + end) / 2)
      if (array[middle].length > findingLength) end = middle - 1
      else if (array[middle].length < findingLength) start = middle + 1
      else return middle
   }
   return -1
}

console.log(getSortArray(array))
console.log(findElemWithLength(array, 5))
console.log(findIndexElemWithLength(array, 5))



