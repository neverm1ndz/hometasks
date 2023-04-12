// Розробити калькулятор

function plusNumbers() {
   const firstNum = parseFloat(document.querySelector('.first_num').value)
   const secondNum = parseFloat(document.querySelector('.second_num').value)
   const result = firstNum + secondNum
   document.querySelector('.result').value = result
}
function minusNumbers() {
   const firstNum = parseFloat(document.querySelector('.first_num').value)
   const secondNum = parseFloat(document.querySelector('.second_num').value)
   const result = firstNum - secondNum
   document.querySelector('.result').value = result
}
function multiplyNumbers() {
   const firstNum = parseFloat(document.querySelector('.first_num').value)
   const secondNum = parseFloat(document.querySelector('.second_num').value)
   const result = firstNum * secondNum
   document.querySelector('.result').value = result
}
function divideNumbers() {
   const firstNum = parseFloat(document.querySelector('.first_num').value)
   const secondNum = parseFloat(document.querySelector('.second_num').value)
   const result = firstNum / secondNum
   document.querySelector('.result').value = result
}

document.querySelector('.plus').onclick = plusNumbers
document.querySelector('.minus').onclick = minusNumbers
document.querySelector('.multiply').onclick = multiplyNumbers
document.querySelector('.divide').onclick = divideNumbers
