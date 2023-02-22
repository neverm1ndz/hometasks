// 3. Вивести таблицю з одним рядком і 7 стовпцями.

let table = `<table border='1px'><tr>`

for (let i = 1; i <= 7; i++) {
   table += `<td>${i}</td>`
}

table += '</tr></table>'

document.write(table)
