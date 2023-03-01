//  Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

const tableRows = parseInt(prompt('Введіть кількість рядків'))
const tableColumns = parseInt(prompt('Введіть кількість стовбців'))

function getTable(rows, columns) {
   let table = `<table border='1px'>`
   const tableMessage = 'Привіт'

   for (let i = 0; i < rows; i++) {
      table += '<tr>'
      for (let j = 0; j < columns; j++) {
         table += `<td>${tableMessage}</td>`
      }
      table += '</tr>'
   }

   table += '</table>'
   return table
}

const table = getTable(tableRows, tableColumns)
document.write(table)








