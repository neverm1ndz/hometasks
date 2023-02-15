
// 1. Дано ширину екрана та кількість елементів, які повинні бути відображені у рядку. Визначити ширину елементів, які повинні бути відображені у цьому рядку. 

// let screenWidth = parseInt(prompt('Введіть ширину екрана', ''))
// let numberElements = parseInt(prompt('Введіть кількість елементів', ''))
// let elementsWidth = screenWidth / numberElements
// document.write(`
// <p>Ширина елемента - ${elementsWidth.toFixed(2)}</p>
// `)


// 2. З клавіатури вводиться розмір заробітної плати та розмір прожиткового мінімуму. Визначити розмір соціальної допомоги (ввжаємо, що заробітна плата є меншою).

// let salary = parseInt(prompt('Введіть розмір зарплати', ''))
// let minCost = parseInt(prompt('Введіть розмір прожиткового мінімуму', ''))
// let socialHelp = minCost - salary
// document.write(`
// <p>Розмір соціальної допомоги = ${socialHelp}</p>
// `)


// 3. З клавіатури вводяться вартість одиниці та кількість одиниць двох товарів. Вивести на екран вартість кожного з видів товарів окремо і загальну вартість.

// let priceProductOne = parseInt(prompt('Введіть вартість першого товару', ''))
// let numberProductOne = parseInt(prompt('Введіть кількість першого товару', ''))
// let priceProductTwo = parseInt(prompt('Введіть вартість другого товару', ''))
// let numberProductTwo = parseInt(prompt('Введіть кількість другого товару', ''))

// let totalPriceProductOne = priceProductOne * numberProductOne
// let totalPriceProductTwo = priceProductTwo * numberProductTwo
// let totalPrice = totalPriceProductOne + totalPriceProductTwo

// document.write(`
// <p>Загальна вартість товару 1 = ${totalPriceProductOne}</p>
// <p>Загальна вартість товару 2 = ${totalPriceProductTwo}</p>
// <p>Загальна вартість товару = ${totalPrice}</p>
// `)


//5. Визначити, яку платню одержить на фірмі сумісник за виконану роботу, якщо йому нараховано S грн., а податок становить 20%.

// let s = parseInt(prompt('Введіть нараховану суму', ''))
// let tax = 0.2
// let total = s - (s * tax)
// document.write(`
// <p>Платня = ${total}</p>
// `)


// 6. Дано три дійсні змінні a, b і c.  Скласти  алгоритм, який міняє місцями значення цих змінних наступним чином: змінна a набуває значення змінної b, змінна b набуває значення змінної c, а змінна  c – попереднє значення змінної a.

// let a = 6
// let b = 3
// let c = 5

// document.write(`
// <p>
// A =${a}
// B = ${b}
// C = ${c}
// </p>
// `)

// let d = a
// a = b
// b = c
// c = d

// document.write(`
// <p>
// newA =${a}
// newB = ${b}
// newC = ${c}
// </p>
// `)


// 7. Скласти алгоритм, який обчислює цілу і дробову частину даного числа х. Наприклад: число 23,56  => ціла: 23, дробова: 0,56.

// ???????

// let num = parseFloat(prompt('Введіть число дійсне число', ''))
// let numInt = Math.floor(num)
// let numFraction = num - numInt

// document.write(`
// <p>Число - ${num}</p>
// <p>Ціла частина - ${numInt}</p>
// <p>Дробова частина - ${numFraction.toFixed(2)}</p>
// `)


// 8. Розробити програму (не використовувати if), яка за номером року Y визначає номер століття C (врахувати, що початком XX століття був 1901, а не 1900 рік). 

// let y = parseInt(prompt('Введіть рік', ''))
// let c = Math.floor(((y + 100) - 1) / 100)
// document.write(`
// <p>${y} рік - це ${c} століття</p>
// `)


// 9. Скласти програму для розв’язування задачі: йде N-а секунда доби, визначити скільки повних годин і повних хвилин пройшло до цього моменту.

// let sec = parseInt(prompt('Введіть секунду доби', ''))
// let min = Math.floor(sec / 60)
// let hour = Math.floor(sec / 3600)

// document.write(`
// <p>З початку доби прийшло ${sec} сек, ${min} хв, ${hour} год</p>
// `)


// 10. З клавіатури вводиться кількість монет номіналом 1 копійка.Визначити скільки гривень і копійок є у даній сумі.Наприклад, дано 245 копійок, а вивести 2 грн 45 копійок.

// let coins = parseInt(prompt('Введіть кількість монет', ''))
// let grn = Math.floor(coins / 100)
// let coins1 = coins % 100

// document.write(`
// <p>${coins} коп - це ${grn} грн ${coins1} коп</p>
// `)


// 11. Дано поточну кількість годин, хвилин, секунд (як на годиннику). Визначити:
// 1) яка кількість секунд буде на годиннику через N секунд.
// 2) яка кількість хвилин буде на годиннику через N секунд, X хвилин.

// let currentHour = parseInt(prompt('Введіть поточну кількість годин', ''))
// let currentMin = parseInt(prompt('Введіть поточну кількість хвилин', ''))
// let currentSec = parseInt(prompt('Введіть поточну кількість секунд', ''))
// let nSec = parseInt(prompt('Введіть N секунд', ''))
// let xMin = parseInt(prompt('Введіть X хвилин', ''))

// const hourInSec = 3600
// const minInSec = 60

// document.write(`
//  <p>Поточний час - ${currentHour}:${currentMin}:${currentSec}</p>
// `)

// let currentHoursInSec = currentHour * hourInSec
// let currentMinInSec = currentMin * minInSec
// let currentTimeInSec = currentHoursInSec + currentMinInSec + currentSec
// let currentTimeInSecAfterNSec = currentTimeInSec + nSec

// currentSec = (currentTimeInSecAfterNSec % hourInSec) % minInSec

// document.write(`
//  <p>Після ${nSec} сек на годиннику буде ${currentSec} сек</p>
// `)

// let xMinInSec = xMin * minInSec
// let totalTimeInSec = currentTimeInSecAfterNSec + xMinInSec

// currentMin = Math.floor((totalTimeInSec % hourInSec) / minInSec)

// document.write(`
//  <p>Після ${xMin} хв та ${nSec} сек на годиннику буде ${currentMin} хв</p>
// `)


// 13. Визначити скільки повних тижнів є у вказаній кількості днів.

// let numberOfDays = parseInt(prompt('Введіть кількість днів', ''))
// const daysOfWeek = 7
// let numberOfWeeks = Math.floor(numberOfDays / daysOfWeek)

// document.write(`
// <p>${numberOfDays} дн - це ${numberOfWeeks} тижнів</p>
// `)


// 14. З клавіатури вводиться номер дня тижня (від 1 до 7). Визначити який буде день тижня через N днів.

// let dayOfWeek = parseInt(prompt('Введіть день тижня', ''))
// let n = parseInt(prompt('Введіть N', ''))
// const numberOfDays = 7
// let futureDayOfWeek = (dayOfWeek + n - 1) % numberOfDays + 1

// document.write(`
// <p>Через ${n} днів буде ${futureDayOfWeek} день тижня</p>
// `)


// 15. З клавіатури вводиться кількість місяців, які пройшли від деякого моменту часу. Вивести повну кількість років і місяців. Наприклад, дано 28 місяців, а вивести 2 роки і 4 місяці.

// let numberOfMonths = parseInt(prompt('Введіть кількість місяців', ''))
// const oneYear = 12
// let numberOfYears = Math.floor(numberOfMonths / oneYear)
// let remainder = numberOfMonths % oneYear

// document.write(`
// <p>Кількість місяців - ${numberOfMonths}</p>
// <p>Це є ${numberOfYears} р і ${remainder} міс</p>
// `)


// 16. З клавіатури вводиться номер місяця. Визначити, який буде місяць через вказану кількість N місяців.

// let numberOfMonth = parseInt(prompt('Введіть номер місяця', ''))
// let n = parseInt(prompt('Введіть N', ''))
// const oneYear = 12

// let futureMonth = (numberOfMonth + n - 1) % oneYear + 1

// document.write(`
// <p>Через ${n} міс буде ${futureMonth} місяць</p>
// `)


// 17. Зашифрувати один введений англійський символ у верхньому регістрі (один з символів: A,B,…Z)  методом зміщення (шифр Цезаря).

let symbol = prompt('Введіть символ', '')

const firstSymbol = 65
const numberOfSymbols = 26
const step = 5

let symbolCode = symbol.charCodeAt()
let newSymbolCode = (symbolCode + step - firstSymbol) % numberOfSymbols + firstSymbol
let newSymbol = String.fromCharCode(newSymbolCode)

document.write(`
<p>${newSymbol}</p>
`)

console.log('');










