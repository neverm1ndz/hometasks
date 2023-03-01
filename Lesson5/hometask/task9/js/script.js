//  Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.

function getTempNegativeNumbers() {
   let tempNegativeNumbers = 0
   for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] < 0) tempNegativeNumbers += 1
   }
   return tempNegativeNumbers
}

const tempNegativeNumbers1 = getTempNegativeNumbers(10, 12, -5, 7, -8, -12, 30)
const tempNegativeNumbers2 = getTempNegativeNumbers(-4, 20, 15, -3, -14, -5, -7)

document.write(`
Кількість від'ємних показів температури - ${tempNegativeNumbers1}<br>
Кількість від'ємних показів температури - ${tempNegativeNumbers2}
`)