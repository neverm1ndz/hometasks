// Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)

function getRandomNum(min, max) {
   return min + Math.floor(Math.random() * (max - min + 1))
}

function createTable(rows, columns) {
   const table = document.createElement('table')
   table.style.border = '1px solid black'
   document.body.prepend(table)
   for (let i = 0; i < rows; i++) {
      const row = document.createElement('tr')
      table.append(row)
      for (let j = 0; j < columns; j++) {
         const column = document.createElement('td')
         column.style.border = '1px solid black'
         column.innerHTML = getRandomNum(10, 99)
         row.append(column)
      }
   }
}

createTable(3, 4)
