// Зробити конвертер валют (курси валют – константи у скрипті)

function convert(dollarRate, euroRate) {
   const grnSum = parseFloat(document.querySelector('.grn').value)
   const dollarSum = grnSum / dollarRate
   const euroSum = grnSum / euroRate
   document.querySelector('.dollar').value = dollarSum.toFixed(2)
   document.querySelector('.euro').value = euroSum.toFixed(2)
}

const dollarRate = 37.7
const euroRate = 40.2

document.querySelector('.convert').onclick = function () {
   convert(dollarRate, euroRate)
}
