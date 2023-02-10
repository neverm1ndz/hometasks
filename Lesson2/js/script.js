//Задача 0. Обчислити значення виразів
let a = 3
let b = 5
let c = 2
let s1 = a + 12 + b
let s2 = Math.sqrt((a + b) / (2 * a))
let s3 = Math.cbrt((a + b) * c)
let s4 = Math.sin(a / -b)
document.write(`
<div>S1 = ${s1}</div>
<div>S2 = ${s2.toFixed(2)}</div>
<div>S3 = ${s3}</div>
<div>S4 = ${s4}</div>
<br>
`)

//Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
let numOne = 4.56
let numTwo = 3.12
let numSum = numOne + numTwo
let numMultiply = numOne * numTwo
let numDivide = numOne / numTwo
document.write(`
<table>
  <tr>
    <td>Число 1 = ${numOne} \v</td>
    <td>Число 2 = ${numTwo}</td>
  </tr>
  <tr>
    <td>Сума</td>
    <td>Добуток</td>
    <td>Частка</td>
  </tr>
  <tr>
    <td>${numSum}</td>
    <td>${numMultiply}</td>
    <td>${numDivide}</td>
  </tr>
</table>
<br>
`)

//Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
let birthdayYear = 1990
let currentYear = 2023
let numberOfYears = currentYear - birthdayYear
document.write(`
<div>Рік народження - ${birthdayYear}</div>
<div>Поточний рік - ${currentYear}</div>
<div>Кількість років - ${numberOfYears}</div>
<br>
`)

//Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).
let productPrice = 43
let productNumber = 6
let percent = 5
let totalPrice = productPrice * productNumber
let tax = totalPrice * (percent / 100)
document.write(`
<div>Загальна вартість товару = ${totalPrice}</div>
<div>ПДВ = ${tax}</div>
<br>
`)

//Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
let widthCm = 34654
let widthM = widthCm / 100
let widthKm = widthM / 1000
document.write(`
<div>${widthCm}см - це ${widthM}м і ${widthKm}км </div>
<br>
`)

//Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
let numberOfSec = 8320
let numberOfMin = numberOfSec / 60
let numberOfHours = numberOfMin / 60
document.write(`
<div>З початку доби пройшло ${numberOfSec} секунд, ${parseInt(numberOfMin)} хвилин, ${parseInt(numberOfHours)} годин</div>
<br>
`)

//Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

let priceProductOne = prompt('Введіть вартісь першого продукта', '')
let numberOfProductOne = prompt('Введіть кількість першого продукта', '')
let priceProductTwo = prompt('Введіть вартісь другого продукта', '')
let numberOfProductTwo = prompt('Введіть кількість другого продукта', '')
let priceProductThree = prompt('Введіть вартісь третього продукта', '')
let numberOfProductThree = prompt('Введіть кількість третього продукта', '')

let totalPriceOfProductOne = priceProductOne * numberOfProductOne
let totalPriceOfProductTwo = priceProductTwo * numberOfProductTwo
let totalPriceOfProductThree = priceProductThree * numberOfProductThree

let totalPriceOfProducts = totalPriceOfProductOne + totalPriceOfProductTwo + totalPriceOfProductThree

document.write(`
<table>
  <tr>
    <td>Продукт 1 --- </td>
    <td>Ціна - ${priceProductOne} --- </td>
    <td>Кількість - ${numberOfProductOne} --- </td>
    <td>Сума - ${totalPriceOfProductOne}</td>
  </tr>
  <tr>
    <td>Продукт 2 --- </td>
    <td>Ціна - ${priceProductTwo} --- </td>
    <td>Кількість - ${numberOfProductTwo} --- </td>
    <td>Сума - ${totalPriceOfProductTwo}</td>
  </tr>
  <tr>
    <td>Продукт 3 --- </td>
    <td>Ціна - ${priceProductThree} --- </td>
    <td>Кількість - ${numberOfProductThree} --- </td>
    <td>Сума - ${totalPriceOfProductThree}</td>
  </tr>
</table>
<div>Загальна сума - ${totalPriceOfProducts}</div>
<br>
`)

//Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
let monthMin = 1
let monthMax = 12
let monthRandom = monthMin + Math.floor(Math.random() * (monthMax - monthMin + 1))

let dayMin = 0
let dayMax = 6
let dayRandom = dayMin + Math.floor(Math.random() * (dayMax - dayMin + 1))

let randomSum = monthRandom + dayRandom

document.write(`
<div>Випадковий номер місяця - ${monthRandom}</div>
<div>Випадковий номер дня - ${dayRandom}</div>
<div>Сума випадкових чисел = ${randomSum}</div>
`)
