// 14. Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести). 

let totalSum = parseFloat(prompt('Яку суму потрібно сплатити?')),
   userMoney
alert(`Вам потрібно сплатити ${totalSum} грн`)

do {
   userMoney = parseFloat(prompt('Введіть суму грошей', ''))
   totalSum = totalSum - userMoney
   if (totalSum > 0)
      alert(`Вам залишилось сплатити ${totalSum} грн`)
   else if (totalSum < 0)
      alert(`Ваша решта ${Math.abs(totalSum)} грн`)
   else
      alert('Вітаємо, сума сплачена')
}
while (totalSum > 0)
