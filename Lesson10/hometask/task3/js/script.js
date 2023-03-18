// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.

function getRandomNum(min, max) {
   return min + Math.floor(Math.random() * (max - min + 1))
}

function getRandomArray(length, min, max) {
   let array = []
   for (let i = 0; i < length; i++) {
      let randomNum = getRandomNum(min, max)
      array.push(randomNum)
   }
   return array
}

function getChangesNumByInsertionSort(array) {
   let changesNum = 0
   for (let k = 1; k < array.length; k++) {
      let currentEl = array[k]
      let i = k - 1
      while (i >= 0 && array[i] > currentEl) {
         array[i + 1] = array[i]
         i--
         changesNum++
      }
      array[i + 1] = currentEl
   }
   return changesNum
}

let randomArray = getRandomArray(30, 1, 99)
let changesNum = getChangesNumByInsertionSort(randomArray)
console.log(randomArray)
console.log(changesNum)

