// 15. Користувача поступово вводить показники температури протягом року. Знайти середню температуру.
const month = 12
let averageTemp = 0,
   totalTemp = 0
for (let i = 1; i <= month; i++) {
   let tempMonth = parseFloat(prompt(`Введіть середню температуру ${i} місяця`))
   totalTemp += tempMonth
}
averageTemp = totalTemp / month

document.write(`Середня температура за рік - ${averageTemp.toFixed(1)}`)