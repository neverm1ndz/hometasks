// 2. З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

const productPrice = parseFloat(prompt('Введіть ціну товару', ''))
const amountMoney = parseFloat(prompt('Введіть кількість грошей', ''))
const lotteryPrice = 4

if (amountMoney < productPrice)
   document.write(`
<p>Вибачте, будь ласка, у вас не вистачає грошей</p>
`)
else if (amountMoney % productPrice >= lotteryPrice)
   document.write(`
<p>Купіть лотерею за ${lotteryPrice} грн</p>
`)
else
   document.write(`
 <p>Дякуємо за покупку</p>
 `)
