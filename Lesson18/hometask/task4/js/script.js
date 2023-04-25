// Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік на якійсь із клітинок, то до
// відповідної таблиці додається червона рамка (спробуйте додати можливість відображення кількості кліків біля
// назви таблиці з використанням відповідно доданого для цього атрибута).

class Table {
   constructor(tableNum, rowsNum, columnsNum, minV, maxV) {
      this.tableNum = tableNum
      this.rowsNum = rowsNum
      this.columnsNum = columnsNum
      this.minV = minV
      this.maxV = maxV
   }

   getRandomNum(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1))
   }

   createTable() {
      const table = document.createElement('table')
      table.setAttribute('border', '1px')
      table.setAttribute('counter', '0')
      table.className = 'table'
      for (let i = 0; i < this.rowsNum; i++) {
         const tr = document.createElement('tr')
         for (let j = 0; j < this.columnsNum; j++) {
            const td = document.createElement('td')
            td.innerText = this.getRandomNum(this.minV, this.maxV)
            tr.append(td)
         }
         table.append(tr)
      }

      return table
   }

   createElement({ tag, className, text }) {
      const el = document.createElement(tag)
      if (className) el.className = className
      if (text) el.innerText = text
      return el
   }

   onClick(e) {
      const table = e.target.closest('.table')
      if (e.target.tagName === 'TD') {
         table.classList.add('red')
         let counter = parseInt(table.getAttribute('counter'))
         table.setAttribute('counter', `${++counter}`)
         table.previousElementSibling.lastElementChild.innerText = counter
      }
      if (!table && document.querySelectorAll('.red').length) {
         const tables = document.querySelectorAll('.red')
         for (const el of tables) {
            el.classList.remove('red')
         }
      }
   }

   render(targetSelector) {
      const container = document.querySelector(targetSelector)

      for (let i = 1; i <= this.tableNum; i++) {
         const tableContainer = document.createElement('div')
         tableContainer.className = 'table-container'
         const h4 = this.createElement({
            tag: 'h4',
            text: `Таблиця ${i}`,
         })
         const table = this.createTable()
         tableContainer.append(h4)
         const div = this.createElement({
            tag: 'div',
            text: 'Кількість кліків: ',
         })
         const span = this.createElement({
            tag: 'span',
            className: 'counter',
            text: `${table.getAttribute('counter')}`,
         })
         div.append(span)
         tableContainer.append(div)

         tableContainer.append(table)
         container.append(tableContainer)
      }
      container.addEventListener('click', this.onClick.bind(this))
   }
}

const table = new Table(3, 3, 3, 10, 99)
table.render('.container')
