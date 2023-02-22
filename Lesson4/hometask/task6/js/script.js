// 6. Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком

let table,
   counterNum = 1

for (let i = 0; i < 3; i++) {
   table = `<table border='1px'>`
   for (let j = 0; j < 3; j++) {
      table += '<tr>'
      for (let k = 0; k < 3; k++) {
         table += `<td>${counterNum}</td>`
         counterNum++
      }
      table += '</tr>'
   }
   table += '</table>'
   document.write(table)
}







