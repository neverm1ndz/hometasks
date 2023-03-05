//  Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів. Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.

const cellsNum = parseInt(prompt('Введіть кількість клітинок'))
const shipsNum = parseInt(prompt('Введіть кількість кораблів'))

function inputArray(cellsNum) {
   let array = []
   for (let i = 0; i < cellsNum; i++) {
      array.push(0)
   }
   return array
}

function getRandomIndex(cellsNum) {
   return Math.floor(Math.random() * cellsNum)
}

function inputShips(shipsNum) {
   let arrayWithShips = inputArray(cellsNum)
   for (let i = 0; i < shipsNum; i++) {
      let randomIndex = getRandomIndex(cellsNum)
      if (arrayWithShips[randomIndex] !== 1) arrayWithShips[randomIndex] = 1
      else i--
   }
   return arrayWithShips
}

function gameSeaBattle(arrayWithShips, shipsNum) {
   attemptsNum = 0
   do {
      let shotNum = parseInt(prompt('Введіть клітинку для пострілу'))
      if (arrayWithShips[shotNum - 1] === 1) {
         shipsNum--
         alert(`Ви потопили корабель! Залишилось ${shipsNum}`)
      }
      attemptsNum++
   } while (shipsNum > 0)
   return alert(`Вітаю! Ви потопили всі кораблі за ${attemptsNum} спроб `)
}

const arrayWithShips = inputShips(shipsNum)
const seaBattle = gameSeaBattle(arrayWithShips, shipsNum)

console.log(arrayWithShips);


