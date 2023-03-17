// Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
// 1) загальний прибуток кожного магазину за тиждень;
// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
// 3) загальний прибуток за робочі дні
// 4) загальний прибуток за вихідні дні
// 5) максимальний прибуток за середу
// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
// 7) відсортувати кожен тиждень за зростанням
// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

const shopsNum = parseInt(prompt('Введіть кількість магазинів'))

function getRandomNum(min, max) {
   return min + Math.floor(Math.random() * (max - min + 1))
}

function getWeekProfit() {
   let array = []
   for (let i = 0; i < 7; i++) {
      const randomNum = getRandomNum(100, 999)
      array.push(randomNum)
   }
   return array
}

function getProfitList(shopsNum) {
   let profitList = []
   for (let i = 0; i < shopsNum; i++) {
      const oneShopProfit = getWeekProfit()
      profitList.push(oneShopProfit)
   }
   return profitList
}

// 1) загальний прибуток кожного магазину за тиждень;

function getWeekProfitForEachShop(profitList) {
   let weekProfitEachShop = []
   for (let i = 0; i < profitList.length; i++) {
      const oneShopSum = profitList[i].reduce((acc, el) => acc + el)
      weekProfitEachShop.push(oneShopSum)
   }
   return weekProfitEachShop
}

// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);

function getTotalProfitForEachDay(profitList) {
   let totalSumFroEachDay = []
   for (let i = 0; i < 7; i++) {
      let sum = 0
      for (let j = 0; j < profitList.length; j++) {
         sum += profitList[j][i]
      }
      totalSumFroEachDay.push(sum)
   }
   return totalSumFroEachDay
}

// 3) загальний прибуток за робочі дні
// 4) загальний прибуток за вихідні дні

function getTotalProfitForPeriod(profitList, startDay, endDay) {
   let sum = 0
   for (let i = 0; i < profitList.length; i++) {
      for (let j = startDay - 1; j < endDay; j++) {
         sum += profitList[i][j]
      }
   }
   return sum
}

// 5) максимальний прибуток за середу

function getMaxProfitForDay(profitList, day) {
   let maxProfit = profitList[0][day - 1]
   for (let i = 1; i < profitList.length; i++) {
      if (profitList[i][day - 1] > maxProfit) maxProfit = profitList[i][day - 1]
   }
   return maxProfit
}

// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200

function getProfitOver_200(profitList) {
   let profitListOver_200 = []
   for (const row of profitList) {
      for (const elem of row) {
         if (elem > 200) profitListOver_200.push(elem)
      }
   }
   return profitListOver_200
}

// 7) відсортувати кожен тиждень за зростанням

function getSortByAscending(profitList) {
   let sortByAscending = JSON.parse(JSON.stringify(profitList))
   for (const row of sortByAscending) {
      row.sort((el1, el2) => el1 - el2)
   }
   return sortByAscending
}

// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків

function getSortByDescendingMaxElem(profitList) {
   let sortByDescendingMaxElem = JSON.parse(JSON.stringify(profitList))
   return sortByDescendingMaxElem.sort((el1, el2) => Math.max(...el2) - Math.max(...el1))
}

// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

function getSortByDescendingSum(profitList) {
   let sortByDescendingSum = JSON.parse(JSON.stringify(profitList))
   return sortByDescendingSum.sort((el1, el2) =>
      el2.reduce((acc, el) => acc + el) - el1.reduce((acc, el) => acc + el)
   )
}


const profitList = getProfitList(shopsNum)
console.log(profitList)

const profitForEachShopList = getWeekProfitForEachShop(profitList)
const totalProfitForEachDay = getTotalProfitForEachDay(profitList)
const totalProfitForWorkDays = getTotalProfitForPeriod(profitList, 1, 5)
const totalProfitForWeekend = getTotalProfitForPeriod(profitList, 6, 7)
const maxProfitForWednesday = getMaxProfitForDay(profitList, 3)
const profitListOver_200 = getProfitOver_200(profitList)
const sortedByAscending = getSortByAscending(profitList)
const sortedByDescendingMaxElem = getSortByDescendingMaxElem(profitList)
const sortedByDescendingSum = getSortByDescendingSum(profitList)

console.log('Загальний прибуток кожного магазину за тиждень')
console.log(profitForEachShopList)

console.log('Загальний прибуток усіх магазинів по дням')
console.log(totalProfitForEachDay)

console.log(`Загальний прибуток за робочі дні = ${totalProfitForWorkDays}`)
console.log(`Загальний прибуток за вихідні дні = ${totalProfitForWeekend}`)
console.log(`Максимальний прибуток за середу = ${maxProfitForWednesday}`)

console.log('Список значень більших 200')
console.log(profitListOver_200)

console.log('Відсортувати кожен тиждень за зростанням');
console.log(sortedByAscending)

console.log('Відсортувати тижні (рядки) за спаданням максимального елемента у цьому тижні (рядку)');
console.log(sortedByDescendingMaxElem)

console.log('Упорядкувати тижні (рядки) за спаданням суми елементів у рядку');
console.log(sortedByDescendingSum)





