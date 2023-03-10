
function getRandomNum(numMin, numMax) {
   return numMin + Math.floor(Math.random() * (numMax - numMin) + 1)
}

function getPricesList() {
   let elemsNum = parseInt(prompt('Введіть кількість елементів'))
   return new Array(elemsNum).fill(0).map(() => getRandomNum(1, 10000))
}

const pricesList = getPricesList()
console.log('Список цін')
console.log(pricesList)


//1. Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

const greaterThan_1000 = pricesList.filter(element => element > 1000)
console.log('Тільки ті, що більші за 1000 грн')
console.log(greaterThan_1000)


//2. Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

const indexGreaterThan_1000 = pricesList.reduce((prevValue, element, index) => {
   if (element > 1000) prevValue.push(index)
   return prevValue
}, [])
console.log('Номери тих, що більші за 1000 грн.')
console.log(indexGreaterThan_1000)


//3. Сформувати список з тих цін, які більші за попереднє значення

const greaterThanPrev = pricesList.filter((element, index, array) => {
   if (element > array[index - 1])
      return element
})
console.log('Більші за попереднє значення')
console.log(greaterThanPrev)


//4. Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

function getPercentRelativeMax(array, element) {
   const maxPrice = Math.max(...array)
   return Math.round(element / maxPrice * 100)
}

const percentRelativeMaxList = pricesList.map(element => getPercentRelativeMax(pricesList, element))
console.log('Значення цін у відсотках стосовно максимального');
console.log(percentRelativeMaxList)


// 5. Підрахувати кількість змін цін

const priceChanges = pricesList.reduce((prevValue, element, index, array) => {
   if (index > 0 && element !== array[index - 1])
      return prevValue + 1
   return prevValue
}
   , 0)

console.log(`Кількість змін цін - ${priceChanges}`)


//6. Визначити, чи є ціна, що менше 1000

const priceLowerThan_1000 = pricesList.some(element => element < 1000)
if (priceLowerThan_1000) console.log('Ціна менша за 1000 є')
else console.log('Ціни меншої за 1000 немає')


//7. Визначати, чи усі ціни більше за 1000

const allPricesGreaterThan_1000 = pricesList.every(element => element > 1000)
if (allPricesGreaterThan_1000) console.log('Всі ціни більші за 1000')
else console.log('Не всі ціни більші за 1000')


//8. Підрахувати кількість цін, що більше за 1000

const numberPricesGreaterThan_1000 = pricesList.reduce((prevValue, element) =>
   element > 1000 ? prevValue + 1 : prevValue
   , 0)
console.log(`Кількість цін більших за 1000 - ${numberPricesGreaterThan_1000}`)


//9. Підрахувати суму цін, що більше за 1000

const sumPricesGreaterThan_1000 = pricesList.reduce((prevValue, element) =>
   element > 1000 ? prevValue + element : prevValue
   , 0)

console.log(`Сума цін більших за 1000 - ${sumPricesGreaterThan_1000}`)


//10. Знайти першу ціну, що більше за 1000

const firstPriceGreaterThan_1000 = pricesList.find(element => element > 1000)
console.log(`Перша ціна, що більша за 1000 - ${firstPriceGreaterThan_1000}`)


//11. Знайти індекс першої ціни, що більше за 1000

const firstIndexPriceGreaterThan_1000 = pricesList.findIndex(element => element > 1000)
console.log(`Індекс першої ціни, що більша за 1000 - ${firstIndexPriceGreaterThan_1000}`)


//12. Знайти останню ціну, що більше за 1000

const lastPriceGreaterThan_1000 = pricesList.reduce((prevValue, element) =>
   element > 1000 ? element : prevValue
)
console.log(`Остання ціна, що більша за 1000 - ${lastPriceGreaterThan_1000}`)


//13. Знайти індекс останньої ціни, що більше за 1000

const lastIndexPriceGreaterThan_1000 = pricesList.reduce((prevValue, element, index) =>
   element > 1000 ? index : prevValue
   , 0)
console.log(`Індекс останньої ціни, що більша за 1000 - ${lastIndexPriceGreaterThan_1000}`)