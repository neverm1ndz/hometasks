// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою

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

function swapElements(array, i1, i2) {
   let temp = array[i1]
   array[i1] = array[i2]
   array[i2] = temp
}

function getChangesNumByBubleSort(array) {
   let changesNum = 0
   let changes
   do {
      changes = false
      for (let i = 1; i < array.length; i++) {
         if (array[i - 1] > array[i]) {
            swapElements(array, i, i - 1)
            changes = true
            changesNum++
         }
      }
   } while (changes)
   return changesNum
}

let randomArray = getRandomArray(30, 1, 99)
let changesNum = getChangesNumByBubleSort(randomArray)
console.log(randomArray)
console.log(changesNum)