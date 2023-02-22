// 8.  Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.

const weeksNum = parseInt(prompt('Введіть кількість тижнів'))
let totalProfit = 0
let weekProfit = 0

for (let i = 1; i <= weeksNum; i++) {
   for (let j = 1; j <= 7; j++) {
      let dayProfit = parseFloat(prompt(`Введіть прибуток за ${j} день ${i} тижня`))
      weekProfit += dayProfit
   }
   document.write(`Прибуток за ${i} тиждень = ${weekProfit}<br>`)
   totalProfit += weekProfit
   weekProfit = 0
}
document.write(`Загальний прибуток за ${weeksNum} тижні = ${totalProfit}`)