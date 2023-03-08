// Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.

function getTaxValue(array) {
   const tax = 0.2
   let taxArray = array.map(element => element *= tax)
   return taxArray
}

let pricesList = [200, 500, 100, 1200, 1500, 800, 2500, 300]
console.log(pricesList)

let taxList = getTaxValue(pricesList)
console.log(taxList)


