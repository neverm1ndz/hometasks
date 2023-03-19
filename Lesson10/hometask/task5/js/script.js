// Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.

let array = ['Ivan', 'Petro', 'Maria', 'Roman', 'Olga', 'Olexandr', 'Pavlo']

function getSortArray(array) {
   for (let k = 1; k < array.length; k++) {
      let currentEl = array[k]
      let i = k - 1
      while (i >= 0 && array[i] > currentEl) {
         array[i + 1] = array[i]
         i--
      }
      array[i + 1] = currentEl
   }
   return array
}

function findElement(array, element) {
   let startIndex = 0
   let lastIndex = array.length - 1
   while (startIndex <= lastIndex) {
      let middle = Math.floor((startIndex + lastIndex) / 2)
      if (array[middle] > element) lastIndex = middle - 1
      else if (array[middle] < element) startIndex = middle + 1
      else return true
   }
   return false
}

function findIndexElement(array, element) {
   let startIndex = 0
   let lastIndex = array.length - 1
   while (startIndex <= lastIndex) {
      let middle = Math.floor((startIndex + lastIndex) / 2)
      if (array[middle] > element) lastIndex = middle - 1
      else if (array[middle] < element) startIndex = middle + 1
      else return middle
   }
   return -1
}

getSortArray(array)
console.log(array)
console.log(findElement(array, 'Olga'))
console.log(findIndexElement(array, 'Olga'))




