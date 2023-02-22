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













// for (let i = 1; i <= 27; i++) {
//    columnsTable += `<td>${i}</td>`
//    if (i % 3 === 0) {
//       if (i < 10)
//          tableOne += `<tr>${columnsTable}</tr>`
//       else if (i < 19)
//          tableTwo += `<tr>${columnsTable}</tr>`
//       else
//          tableThree += `<tr>${columnsTable}</tr>`
//       columnsTable = ''
//    }
// }

// document.write(`
// <table border="1px">
// ${tableOne}
// </table>
// <table border="1px">
// ${tableTwo}
// </table>
// <table border="1px">
// ${tableThree}
// </table>
// `)







