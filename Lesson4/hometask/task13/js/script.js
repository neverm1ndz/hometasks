// 13. Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель. 

const columnsX = parseInt(prompt('Введіть кількість стовбців (X)', ''))
const rowsY = parseInt(prompt('Введіть кількість рядків (Y)', ''))
const shellsNum = parseInt(prompt('Введіть кількість снарядів', ''))
const randomX = 1 + Math.floor(Math.random() * columnsX)
const randomY = 1 + Math.floor(Math.random() * rowsY)

console.log(randomX, randomY)

for (let i = 0; i < shellsNum; i++) {
   const shotX = parseInt(prompt('Введіть координати осі X', ''))
   const shotY = parseInt(prompt('Введіть координати осі Y', ''))
   if (shotX === randomX && shotY === randomY) {
      alert('Вітаємо! Руський корабль пішов нах')
      break
   }
   else
      alert('Промах, спробуйте ще раз')
}

document.write(`
Позиція корабля по осі X - ${randomX}
Позиція корабля по осі Y - ${randomY}
`)


