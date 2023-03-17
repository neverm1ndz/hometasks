// Знайти суми елементів у вказаній області

function getRandomNum(minNum, maxNum) {
   return minNum + Math.floor(Math.random() * (maxNum - minNum))
}

function generateArray(arrayLength, minNum, maxNum) {
   let array = []
   for (let i = 0; i < arrayLength; i++) {
      const randomNum = getRandomNum(minNum, maxNum)
      array.push(randomNum)
   }
   return array
}

function generateTable(tableLength, arrayLength, minNum, maxNum) {
   let array = []
   for (let i = 0; i < tableLength; i++) {
      const randomColumn = generateArray(arrayLength, minNum, maxNum)
      array.push(randomColumn)
   }
   return array
}

// 1

// function getElementsSum_1(table, rows, columns) {
//    const rowsHalf = Math.floor(rows / 2)
//    const columnsHalf = Math.floor(columns / 2)
//    let elementsSum = 0
//    for (let i = 0; i < rowsHalf; i++) {
//       for (let j = 0; j < columnsHalf; j++) {
//          elementsSum += table[i][j]
//       }
//    }
//    return elementsSum
// }

// 2

// function getElementsSum_2(table, rows, columns) {
//    const rowsHalf = Math.floor(rows / 2)
//    const columnsHalf = Math.floor(columns / 2)
//    let elementsSum = 0
//    for (let i = 0; i < rowsHalf; i++) {
//       for (let j = columnsHalf; j < columns; j++) {
//          elementsSum += table[i][j]
//       }
//    }
//    return elementsSum
// }

// 3

// function getElementsSum_3(table, rows, columns) {
//    const rowsHalf = Math.floor(rows / 2)
//    const columnsHalf = Math.floor(columns / 2)
//    let elementsSum = 0
//    for (let i = rowsHalf; i < rows; i++) {
//       for (let j = 0; j < columnsHalf; j++) {
//          elementsSum += table[i][j]
//       }
//    }
//    return elementsSum
// }

// 4

// function getElementsSum_4(table, rows, columns) {
//    const rowsHalf = Math.floor(rows / 2)
//    const columnsHalf = Math.floor(columns / 2)
//    let elementsSum = 0
//    for (let i = rowsHalf; i < rows; i++) {
//       for (let j = columnsHalf; j < columns; j++) {
//          elementsSum += table[i][j]
//       }
//    }
//    return elementsSum
// }

// 1,2,3,4

function getElementsQarterAreaSum(table, startRows, startColumns) {
   const endRows = startRows + table.length / 2
   const endColumns = startColumns + table[0].length / 2
   let elementsSum = 0
   for (let i = startRows; i < endRows; i++) {
      for (let j = startColumns; j < endColumns; j++) {
         elementsSum += table[i][j]
      }
   }
   return elementsSum
}


// 5 Суму парних рядків

function getSumEvenRows(table) {
   let evenRowsSum = 0
   for (let i = 0; i < table.length; i += 2) {
      for (let j = 0; j < table[i].length; j++)
         evenRowsSum += table[i][j]
   }
   return evenRowsSum
}

// 6 Суму непарних стовпців

function getSumOddColumns(table) {
   let sumOddColumns = 0
   for (let i = 0; i < table.length; i++) {
      for (let j = 1; j < table[i].length; j += 2) {
         sumOddColumns += table[i][j]
      }
   }
   return sumOddColumns
}

// 7 У парних рядках – непарні стовпці, у непарних – парні.

function getChessBoardElementsSum(table) {
   let sum = 0
   for (let i = 0; i < table.length; i++) {
      if (i % 2 === 0)
         for (let j = 1; j < table[i].length; j += 2) {
            sum += table[i][j]
         }
      else
         for (let j = 0; j < table[i].length; j += 2) {
            sum += table[i][j]
         }
   }
   return sum
}

const tableRows = parseInt(prompt('Введіть кількість рядків'))
const tableColumns = parseInt(prompt('Введіть кількість стовпців'))
const tableArray = generateTable(tableRows, tableColumns, 1, 10)
const tableRowsHalf = Math.floor(tableRows / 2)
const tableColumnsHalf = Math.floor(tableColumns / 2)

const elementsSum_1 = getElementsQarterAreaSum(tableArray, 0, 0)
const elementsSum_2 = getElementsQarterAreaSum(tableArray, 0, tableColumnsHalf)
const elementsSum_3 = getElementsQarterAreaSum(tableArray, tableRowsHalf, 0)
const elementsSum_4 = getElementsQarterAreaSum(tableArray, tableRowsHalf, tableColumnsHalf)
const evenRowsSum = getSumEvenRows(tableArray)
const oddColumnsSum = getSumOddColumns(tableArray)
const chessBoardElemenstSum = getChessBoardElementsSum(tableArray)

console.log(tableArray)
console.log(`Сума в першій області = ${elementsSum_1}`)
console.log(`Сума в другій області = ${elementsSum_2}`)
console.log(`Сума в третій області = ${elementsSum_3}`)
console.log(`Сума в третій області = ${elementsSum_4}`)
console.log(`Сума елементів парних рядків = ${evenRowsSum}`)
console.log(`Сума елементів непарних стовбців = ${oddColumnsSum}`)
console.log(`Сума елементів у шахматному порядку = ${chessBoardElemenstSum}`)
