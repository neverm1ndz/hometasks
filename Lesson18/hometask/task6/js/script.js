// Приклад. Дано перелік товарів у кошику. При зміні кількості одиниць товару збільшувати загальну
// вартість. Створити клас Product, що призначений для маніпуляцій товаром та клас ProductManager
// що оперує з усіма товарами (через подію передвати ідентифікатор товару та операцію, що зроблена

class ElementCreator {
   static createHTMLElement({ tag, attrs, props, events }) {
      const el = document.createElement(tag)
      if (attrs)
         for (const attrKey in attrs) {
            el.setAttribute(attrKey, attrs[attrKey])
         }
      if (props)
         for (const propsKey in props) {
            el[propsKey] = props[propsKey]
         }
      if (events)
         for (const eventsKey in events) {
            el.addEventListener(eventsKey, events[eventsKey])
         }
      return el
   }
}

class Product {
   constructor({ imgSrc, title, price, id }) {
      this.imgSrc = imgSrc
      this.title = title
      this.price = price
      this.id = id
      this.el = this.createItem()
   }

   decreaseValue() {
      const decreaseValue = new CustomEvent('decrease', {
         detail: {
            id: this.id,
         },
      })
      this.el.dispatchEvent(decreaseValue)
   }
   increaseValue() {
      const increaseValue = new CustomEvent('increase', {
         detail: {
            id: this.id,
         },
      })
      this.el.dispatchEvent(increaseValue)
   }
   deleteItem() {
      const deleteItem = new CustomEvent('delete', {
         detail: {
            id: this.id,
         },
      })
      this.el.dispatchEvent(deleteItem)
   }

   createItem() {
      const container = ElementCreator.createHTMLElement({
         tag: 'div',
         attrs: {
            class: 'item-container',
         },
      })
      const img = ElementCreator.createHTMLElement({
         tag: 'img',
         props: {
            src: this.imgSrc,
         },
      })
      container.append(img)

      const title = ElementCreator.createHTMLElement({
         tag: 'div',
         props: {
            innerText: this.title,
         },
      })
      container.append(title)

      this.decBtn = ElementCreator.createHTMLElement({
         tag: 'button',
         props: {
            innerText: '-',
         },
         events: {
            click: this.decreaseValue.bind(this),
         },
      })
      container.append(this.decBtn)

      this.valueSpan = ElementCreator.createHTMLElement({
         tag: 'span',
         props: {
            innerText: '1',
         },
      })
      this.value = parseFloat(this.valueSpan.innerText)
      container.append(this.valueSpan)

      let btn = ElementCreator.createHTMLElement({
         tag: 'button',
         props: {
            innerText: '+',
         },
         events: {
            click: this.increaseValue.bind(this),
         },
      })
      container.append(btn)

      const totalPrice = ElementCreator.createHTMLElement({
         tag: 'div',
         props: {
            innerText: 'До оплати: ',
         },
      })
      this.totalPriceSpan = ElementCreator.createHTMLElement({
         tag: 'span',
         props: {
            innerText: `${this.price} грн`,
         },
      })
      totalPrice.append(this.totalPriceSpan)
      container.append(totalPrice)

      btn = ElementCreator.createHTMLElement({
         tag: 'button',
         props: {
            innerText: 'x',
         },
         events: {
            click: this.deleteItem.bind(this),
         },
      })
      container.append(btn)

      return container
   }

   render(targetSelector) {
      document.querySelector(targetSelector).append(this.el)
   }
}

class TotalPrice {
   constructor() {
      this.el = this.createElement()
   }
   createElement() {
      const totalPrice = ElementCreator.createHTMLElement({
         tag: 'div',
         props: {
            innerText: 'Загалом до оплати: ',
         },
      })
      this.totalPriceSpan = ElementCreator.createHTMLElement({
         tag: 'span',
      })
      totalPrice.append(this.totalPriceSpan)
      return totalPrice
   }
}

class ProductManager {
   constructor(productsList) {
      this.productsList = productsList
      this.el = this.createElement()
   }

   getTotalPrice() {
      return this.productsList.reduce((acc, el) => acc + el.price * el.value, 0)
   }
   increaseValue(e) {
      const itemId = e.detail.id

      this.productsList.forEach(el => {
         if (el.id === itemId) {
            ++el.value
            el.valueSpan.innerText = el.value
            el.totalPriceSpan.innerText = `${el.price * el.value}`
            if (el.decBtn.hasAttribute('disabled'))
               el.decBtn.removeAttribute('disabled')
            this.totalPrice.totalPriceSpan.innerText = this.getTotalPrice()
         }
      })
   }
   decreaseValue(e) {
      const itemId = e.detail.id

      this.productsList.forEach(el => {
         if (el.id === itemId) {
            --el.value
            el.valueSpan.innerText = el.value
            el.totalPriceSpan.innerText = `${el.price * el.value}`
            if (el.value === 0) el.decBtn.setAttribute('disabled', 'true')
            this.totalPrice.totalPriceSpan.innerText = this.getTotalPrice()
         }
      })
   }
   deleteItem(e) {
      const itemId = e.detail.id
      this.productsList = this.productsList.filter(el => el.id !== itemId)
      this.totalPrice.totalPriceSpan.innerHTML = this.getTotalPrice()
      this.printList()
   }
   printList() {
      this.el.innerHTML = ''
      for (const product of this.productsList) {
         this.el.append(product.el)
      }
      this.el.append(this.totalPrice.el)
   }
   createElement() {
      const container = document.createElement('div')
      for (const product of this.productsList) {
         product.el.addEventListener('increase', this.increaseValue.bind(this))
         product.el.addEventListener('decrease', this.decreaseValue.bind(this))
         product.el.addEventListener('delete', this.deleteItem.bind(this))
         container.append(product.el)
      }
      this.totalPrice = new TotalPrice()
      this.totalPrice.totalPriceSpan.innerHTML = this.getTotalPrice()
      container.append(this.totalPrice.el)
      return container
   }
   render(targetSelector) {
      document.querySelector(targetSelector).append(this.el)
   }
}

const productList = [
   new Product({
      imgSrc: './img/logitec.webp',
      title: 'Миша Logitech G102',
      price: 1299,
      id: 100,
   }),
   new Product({
      imgSrc: './img/razer.webp',
      title: 'Razer Goliathus Mobile Speed Control',
      price: 499,
      id: 102,
   }),
   new Product({
      imgSrc: './img/hisense.webp',
      title: 'Телевизор Hisense 55A63H',
      price: 16999,
      id: 101,
   }),
]

window.onload = function () {
   const manager = new ProductManager(productList)
   manager.render('.container')
}
