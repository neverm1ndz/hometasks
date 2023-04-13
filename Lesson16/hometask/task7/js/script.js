// Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі. Підрахувати загальну вартість.

function getTotalSum() {
   const inputs = document.querySelectorAll('input')
   const selects = document.querySelectorAll('select')
   let sum = 0
   for (const input of inputs) {
      if (input.checked) sum += parseFloat(input.value)
   }
   for (const select of selects) {
      sum += parseFloat(select.value)
   }
   const totalPrice = document.querySelector('.price_value')
   totalPrice.innerHTML = sum
}

document.querySelector('.sum').onclick = getTotalSum
