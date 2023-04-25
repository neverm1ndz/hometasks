// Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами (кількість елементів у списку
// випадкова від 1 до 10, елементи випадкові – від 1 до 100). При натисненні на кнопку нумеровані списки з
// парною кількістю елементів зафарбувати у зелений колір, інші у червоний.

class RandomLists {
   constructor(listNum, minElemsNum, maxElemsNum, minV, maxV) {
      this.listNum = listNum
      this.minElemsNum = minElemsNum
      this.maxElemsNum = maxElemsNum
      this.minV = minV
      this.maxV = maxV
   }
   getRandomNum(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1))
   }
   getRandomList() {
      const container = document.createElement('div')
      container.className = 'list-container'

      const ol = document.createElement('ol')
      ol.className = 'list'
      const elemsNum = this.getRandomNum(this.minElemsNum, this.maxElemsNum)
      for (let i = 0; i < elemsNum; i++) {
         const li = document.createElement('li')
         li.className = 'list-item'
         li.innerText = `${this.getRandomNum(this.minV, this.maxV)}`
         ol.append(li)
      }

      container.append(ol)
      return container
   }

   onLiClick() {
      const lists = document.querySelectorAll('.list')
      for (const list of lists) {
         if (list.children.length % 2 === 0) list.style.color = 'green'
         else list.style.color = 'red'
      }
   }

   render(targetSelector) {
      for (let i = 0; i < this.listNum; i++) {
         const list = this.getRandomList()
         document.querySelector(targetSelector).append(list)
      }
      const btn = document.createElement('button')
      btn.className = 'button'
      btn.innerText = 'Color'
      btn.addEventListener('click', this.onLiClick.bind(this))
      document.querySelector(targetSelector).append(btn)
   }
}

window.onload = function () {
   const list = new RandomLists(5, 1, 10, 1, 100)
   list.render('.container')
}
