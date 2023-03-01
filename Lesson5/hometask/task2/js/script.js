// 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

function getWorkDay(dayNum) {
  let result
  if (dayNum < 6) result = 'Робочий день'
  else result = 'Вихідний день'
  return result
}

const dayNum = parseInt(prompt('Введіть номер дня'))
const whatDay = getWorkDay(dayNum)

document.write(whatDay)


