// Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).

const productTitles = ['Сир', 'Сок', 'Хліб', 'М\'ясо', 'Масло']
const productPrices = [250, 60, 40, 400, 80]

let usersMoney = parseFloat(prompt('Введіть кількість грошей'))

function getWhatCanBuy(money, titles, prices) {
   let result = ''
   for (let i = 0; i < prices.length; i++) {
      if (money >= prices[i]) result += `${titles[i]} - ${prices[i]}<br>`
   }
   if (!result) result += 'нічого =('
   return result
}

let whatCanBuy = getWhatCanBuy(usersMoney, productTitles, productPrices)

document.write(`
У вас ${usersMoney}грн<br>
Ви можете купити:<br>
${whatCanBuy}
`)








