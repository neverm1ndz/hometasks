// 5. Вивести таблицю

let table = `<table border='1px'>`
let counterNum = 1

for (let i = 0; i < 3; i++) {
   table += '<tr>'
   for (let j = 0; j < 3; j++) {
      table += `<td>${counterNum}</td>`
      counterNum++
   }
   table += '</tr>'
}

table += '</table>'

document.write(table)