// 4. Вивести таблицю з 3 рядків і 7 стовпців


let table = `<table border='1px'>`

for (let i = 0; i < 3; i++) {
   table += '<tr>'
   for (let j = 1; j <= 7; j++) {
      table += `<td>${j}</td>`

   }
   table += '</tr>'
}

table += '</table>'

document.write(table)


