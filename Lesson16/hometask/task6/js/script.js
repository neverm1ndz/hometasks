// Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить середнє значення.

function getTable() {
   const priceNum = parseInt(document.querySelector('.price_number').value)
   const table = document.createElement('table')
   table.style.border = '1px solid black'
   document.querySelector('.get_table').after(table)
   for (let i = 0; i < priceNum; i++) {
      const row = document.createElement('tr')
      table.append(row)
      const column = document.createElement('td')
      column.style.border = '1px solid black'
      row.append(column)
      const inp = document.createElement('input')
      inp.classList.add('input_table')
      column.append(inp)
   }
}

function getAvSum() {
   if (document.querySelector('.sum')) document.querySelector('.sum').remove()
   const inpList = document.querySelectorAll('.input_table')
   let sum = 0
   for (const input of inpList) {
      sum += parseInt(input.value)
   }
   sum = sum / inpList.length
   let div = document.createElement('div')
   div.className = 'sum'
   div.innerHTML = `Average sum = ${sum.toFixed(2)}`
   document.body.append(div)
}

document.querySelector('.get_table').onclick = getTable
document.querySelector('.get_sum').onclick = getAvSum
