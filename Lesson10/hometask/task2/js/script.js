// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.

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

function getChangesNumByShakeSort(array) {
   let firstIndex = 0
   let lastIndex = array.length - 1
   let changesNum = 0
   while (firstIndex < lastIndex) {
      for (let i = firstIndex; i < lastIndex; i++) {
         if (array[i] > array[i + 1]) {
            swapElements(array, i, i + 1)
            changesNum++
         }
      }
      lastIndex--
      for (let i = lastIndex; i > firstIndex; i--) {
         if (array[i] < array[i - 1]) {
            swapElements(array, i, i - 1)
            changesNum++
         }
      }
      firstIndex++
   }
   return changesNum
}

let randomArray = getRandomArray(30, 1, 99)
let changesNum = getChangesNumByShakeSort(randomArray)
console.log(randomArray)
console.log(changesNum);



