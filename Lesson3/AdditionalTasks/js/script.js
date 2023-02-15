// 1.

// const enteredNum = parseInt(prompt('Введіть номер пункту\n1. Веселий\n2. Сумний\n3. Обурений', ''))

// if ((enteredNum < 1) || (enteredNum > 3))
//    alert('Некоректний номер')
// else if (enteredNum === 1)
//    alert(':)')
// else if (enteredNum === 2)
//    alert(':(')
// else
//    alert('>:(')


// 2. Задача 2. Комп’ютер випадковим чином вибирає початок і кінець проміжку (проміжок повинен знаходитися в межах від 1 до 100). Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку, або розташоване від нього (від лівого або правого краю) не більше ніж на 10.

const intervalMin = 1 + Math.floor(Math.random() * 50)
const intervalMax = 51 + Math.floor(Math.random() * 50)
const enteredNum = parseInt(prompt('Введіть число від 1 до 100', ''))

if (enteredNum >= intervalMin - 10 && enteredNum <= intervalMax + 10)
   document.write(`
<p>Інтервал від ${intervalMin} до ${intervalMax}</p>
<p>Ваше число ${enteredNum}</p>
Вітаю, ви вгадали
`)
else
   document.write(`
<p>Інтервал від ${intervalMin} до ${intervalMax}</p>
<p>Ваше число ${enteredNum}</p>
Спробуйте ще раз
`)

