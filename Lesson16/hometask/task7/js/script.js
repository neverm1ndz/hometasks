// Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі. Підрахувати загальну вартість.

function getTotalSum() {
   // const inputs = document.querySelectorAll('input')
   // const selects = document.querySelectorAll('select')
   // let sum = 0
   // for (const input of inputs) {
   //    if (input.checked) sum += parseFloat(input.value)
   // }
   // for (const select of selects) {
   //    sum += parseFloat(select.value)
   // }
   const totalSum =
      sumStage('.stage1') + sumStage('.stage2') + sumStage('.stage3')
   const totalPrice = document.querySelector('.price_value')
   totalPrice.innerHTML = totalSum
}

function sumStage(selector) {
   if (document.querySelector(`${selector}Price`))
      document.querySelector(`${selector}Price`).remove()
   const inputs = document.querySelectorAll(`${selector} input`)
   const select = document.querySelector('select')
   let sum = 0
   for (const input of inputs) {
      if (input.checked) sum += parseFloat(input.value)
   }
   sum += parseFloat(select.value)
   const price = document.createElement('div')
   price.className = `${selector}Price`
   price.innerHTML = `Вартісь першого етапу = ${sum}`
   document.querySelector(selector).append(price)
   console.log(document.querySelector(`Price`))
   return sum
}

document.querySelector('.sum1').onclick = function () {
   sumStage('.stage1')
}
document.querySelector('.sum2').onclick = function () {
   sumStage('.stage2')
}
document.querySelector('.sum3').onclick = function () {
   sumStage('.stage3')
}
document.querySelector('.sum').onclick = getTotalSum
// console.log(sumStage('.stage1'))
