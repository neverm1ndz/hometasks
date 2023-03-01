// Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.

function getThreeResults(num1, num2, num3) {
   let result, evenNums = 0, positiveNums = 0, bigNums = 0

   for (let i = 0; i < 3; i++) {
      if (arguments[i] % 2 === 0) evenNums += 1
      if (arguments[i] > 0) positiveNums += 1
      if (arguments[i] > 100) bigNums += 1
   }

   result = `
      Кількість парних - ${evenNums}<br>
      Кількість додатних - ${positiveNums}<br>
      Кількість більших за 100 - ${bigNums}<br>
      `

   return result
}

const num1 = parseFloat(prompt('Введіть перше чилсо'))
const num2 = parseFloat(prompt('Введіть друге чилсо'))
const num3 = parseFloat(prompt('Введіть третє чилсо'))

const threeResults = getThreeResults(num1, num2, num3)

document.write(threeResults)






