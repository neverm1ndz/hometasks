// Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

function getSeason(month) {
   let result
   if (month < 3 || month === 12)
      result = 'Зима'
   else if (month < 6)
      result = 'Весна'
   else if (month < 9)
      result = 'Літо'
   else if (month < 12)
      result = 'Осінь'
   return result
}

const monthNum = parseInt(prompt('Введіть номер місяця'))
const season = getSeason(monthNum)

document.write(`
${monthNum} місяць - це ${season}
`)

