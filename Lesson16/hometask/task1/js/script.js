// Розробити калькулятор

function operation(sum) {
   const firstNum = parseFloat(document.querySelector('.first_num').value)
   const secondNum = parseFloat(document.querySelector('.second_num').value)
   const result = sum(firstNum, secondNum)
   document.querySelector('.result').value = result
}

const plus = (num1, num2) => num1 + num2
const minus = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

document.querySelector('.plus').onclick = () => operation(plus)
document.querySelector('.minus').onclick = () => operation(minus)
document.querySelector('.multiply').onclick = () => operation(multiply)
document.querySelector('.divide').onclick = () => operation(divide)
