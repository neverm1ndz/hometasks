// Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

function getRandomNum(max) {
   return Math.floor(Math.random() * max)
}

function createBattleField(shipsNum, fieldSize) {
   let gameField = new Array(fieldSize).fill(0).map(() => new Array(fieldSize).fill(0))
   for (let i = 0; i < shipsNum; i++) {
      let row = getRandomNum(fieldSize)
      let col = getRandomNum(fieldSize)
      if (gameField[row][col] === 1) i--
      else gameField[row][col] = 1
   }
   return gameField
}

function gameSeaBattle(battleField, shipsNum, shotsNum) {
   let result
   do {
      alert(JSON.stringify(battleField))
      let row = parseInt(prompt('Введіть номер рядка (координати Y від 1 до 6)'))
      let col = parseInt(prompt('Введіть номер стовпця (координати X від 1 до 6)'))
      shotsNum--
      if (battleField[row - 1][col - 1] === 1) {
         shipsNum--
         alert(`Ви потопили корабель! Залишилось ${shipsNum} кораблів та ${shotsNum} снарядів`)
         battleField[row - 1][col - 1] = 0
      }
      else alert(`Ви промахнулися! Залишилось ${shipsNum} кораблів та ${shotsNum} снарядів`)
   } while (shipsNum > 0 && shotsNum > 0)
   shipsNum > 0 ? result = 'Ви програли...' : result = 'Ви потопили всі кораблі!'
   return result
}

const shipsNum = 5
let shotsNum = parseInt(prompt('Введіть кількість снарядів'))
let battleField = createBattleField(shipsNum, 6)
console.log(battleField)

alert(gameSeaBattle(battleField, shipsNum, shotsNum))
