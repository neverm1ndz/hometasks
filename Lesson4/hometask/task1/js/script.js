// 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.

const numbersValue = parseInt(prompt('Введіть кількість чисел', ''))

for (let i = 0; i < numbersValue; i++) {
   const randomNum = 1 + Math.floor(Math.random() * 100)
   document.write(`
<ul>
   <li>${randomNum}</li>
</ul>
`)
}