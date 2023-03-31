// Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
// Поля(властивості)
// Масив, у якому зберігається поле з зайцями
// Методи (дії)
// Метод пострілу (задається позиція пострілу)
// Виведення ігрового поля

function ShootingGame(rowsNum, columnsNum, rabbitsNum) {
   // Масив, у якому зберігається поле з зайцями
   this.fieldWithRabbits = this.getField(rowsNum, columnsNum, rabbitsNum)
}

ShootingGame.prototype.getField = function (rowsNum, columnsNum, rabbitsNum) {
   let field = new Array(rowsNum)
      .fill()
      .map(elem => (elem = new Array(columnsNum).fill(0)))
   for (let i = 0; i < rabbitsNum; i++) {
      let randomRowIndex = Math.floor(Math.random() * rowsNum)
      let randomColumnIndex = Math.floor(Math.random() * rowsNum)
      field[randomRowIndex][randomColumnIndex] === 0
         ? (field[randomRowIndex][randomColumnIndex] = 1)
         : i--
   }
   return field
}

// Метод пострілу (задається позиція пострілу)

ShootingGame.prototype.getShot = function () {
   let userRowIndex = parseInt(prompt('Введіть координату Y'))
   let userColumnIndex = parseInt(prompt('Введіть координату X'))
   if (this.fieldWithRabbits[userRowIndex - 1][userColumnIndex - 1] === 0)
      alert('Ви промахнулися')
   else alert('Ви поцілили в зайця')
}

// Виведення ігрового поля

ShootingGame.prototype.displayField = function () {
   document.write(`<table border='1px'>`)
   for (const row of this.fieldWithRabbits) {
      document.write(`<tr>`)
      for (const column of row) {
         document.write(`<td>${column}</td>`)
      }
      document.write(`</tr>`)
   }
   document.write(`</table>`)
}

let rowsNum = parseInt(prompt('Введіть кількість рядків'))
let columnsNum = parseInt(prompt('Введіть кількість стовпців'))
let rabbitsNum = parseInt(prompt('Введіть кількість зайців'))
let shootingGame = new ShootingGame(rowsNum, columnsNum, rabbitsNum)

shootingGame.getShot()
shootingGame.displayField()
console.log(shootingGame)
