//  Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.

function getTempPositiveAverage() {
   let tempPositiveNum = 0
   let tempPositiveTotal = 0
   let tempPositiveAverage

   for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] > 0) {
         tempPositiveTotal += arguments[i]
         tempPositiveNum += 1
      }
   }

   tempPositiveAverage = tempPositiveTotal / tempPositiveNum
   return tempPositiveAverage
}

let tempPositiveAverage = getTempPositiveAverage(10, 14, -5, -6, 21, -5, 5, 6)

document.write(`
Середня температура додатніх показників температруи - ${tempPositiveAverage}
`)