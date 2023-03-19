// Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

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

function getBubleSort(array) {
   let changes
   document.write(`Сортування бульбашкою<br>${JSON.stringify(array)}<br>`)

   do {
      changes = false
      for (let i = 1; i < array.length; i++) {
         if (array[i - 1] > array[i]) {
            swapElements(array, i, i - 1)
            changes = true
            document.write(`${JSON.stringify(array)}<br>`)
         }
      }
   } while (changes)
   return array
}


function getShakeSort(array) {
   document.write(`Сортування змішуванням<br>${JSON.stringify(array)}<br>`)
   let startIndex = 0
   let lastIndex = array.length - 1
   while (startIndex < lastIndex) {
      for (let i = startIndex; i < lastIndex; i++) {
         if (array[i] > array[i + 1]) {
            swapElements(array, i, i + 1)
            document.write(`${JSON.stringify(array)}<br>`)
         }
      }
      lastIndex--
      for (let i = lastIndex; i > startIndex; i--) {
         if (array[i] < array[i - 1]) {
            swapElements(array, i, i - 1)
            document.write(`${JSON.stringify(array)}<br>`)
         }
      }
      startIndex++
   }
   return array
}


function getInsertionSort(array) {
   document.write(`Сортування вставками<br>${JSON.stringify(array)}<br>`)
   for (let k = 1; k < array.length; k++) {
      let currentEl = array[k]
      let i = k - 1
      while (i >= 0 && array[i] > currentEl) {
         array[i + 1] = array[i]
         i--
         document.write(`${JSON.stringify(array)}<br>`)
      }
      array[i + 1] = currentEl
   }
   document.write(`${JSON.stringify(array)}<br>`)
   return array
}

let arrayBuble = getRandomArray(6, 1, 99)
let arrayShake = [...arrayBuble]
let arrayInsertion = [...arrayBuble]

getBubleSort(arrayBuble)
getShakeSort(arrayShake)
getInsertionSort(arrayInsertion)


