// Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.

function getRandomNum(min, max) {
   return min + Math.floor(Math.random() * (max - min + 1))
}

function additionSimulator(min, max) {
   const firstNum = getRandomNum(min, max)
   const secondNum = getRandomNum(min, max)
   const sum = firstNum + secondNum
   let result
   let usersNum = parseInt(prompt(`${firstNum} + ${secondNum}`))
   if (usersNum === sum) result = 'Правильно!'
   else result = `Не правильно! Правильна відповідь ${sum}`
   return alert(result)
}

setInterval(additionSimulator, 10000, 1, 10)




