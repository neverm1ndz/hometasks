// Задача. Розробити елемент для вводу кількості вибраного товару за зразком (мінімальна кількість 1, максимальна кількість 10, при перевищенні блокувати кнопку)

// class Product {
//    constructor(imgSrc, title, price, minV = 1, maxV = 10) {
//       this.imgSrc = imgSrc
//       this.title = title
//       this.price = price
//       this.minV = minV
//       this.maxV = maxV
//    }

//    checkValue() {
//       if (this.btnMinus.hasAttribute('disabled'))
//          this.btnMinus.removeAttribute('disabled')
//       else if (this.btnPlus.hasAttribute('disabled'))
//          this.btnPlus.removeAttribute('disabled')
//       if (this.value === 1) this.btnMinus.setAttribute('disabled', 'true')
//       else if (this.value === 10) this.btnPlus.setAttribute('disabled', 'true')
//    }

//    updateData() {
//       this.valueSpan.innerText = this.value
//       this.totalPriceSpan.innerHTML = this.price * this.value
//    }

//    onButtonClick(action) {
//       if (action === 'increment') this.value++
//       else if (action === 'decrement') this.value--
//       this.updateData()
//       this.checkValue()
//    }

//    createItem() {
//       const item = document.createElement('div')
//       item.className = 'item'

//       const img = document.createElement('img')
//       img.className = 'img'
//       img.src = this.imgSrc
//       item.append(img)

//       const title = document.createElement('div')
//       title.className = 'title'
//       title.innerText = this.title
//       item.append(title)

//       const actions = document.createElement('div')
//       actions.className = 'actions'

//       this.btnMinus = document.createElement('button')
//       this.btnMinus.classList.add('button')
//       this.btnMinus.innerText = '-'
//       actions.append(this.btnMinus)

//       this.valueSpan = document.createElement('span')
//       this.valueSpan.className = 'value'
//       this.value = this.minV
//       this.valueSpan.innerHTML = this.value
//       actions.append(this.valueSpan)

//       this.btnPlus = document.createElement('button')
//       this.btnPlus.classList.add('button')
//       this.btnPlus.innerText = '+'
//       actions.append(this.btnPlus)
//       item.append(actions)

//       const totalPrice = document.createElement('div')
//       totalPrice.className = 'total-price'
//       totalPrice.innerText = 'До оплати: '

//       this.totalPriceSpan = document.createElement('span')
//       this.totalPriceSpan.className = 'total-price-value'
//       this.totalPriceSpan.innerHTML = this.price
//       totalPrice.append(this.totalPriceSpan)
//       item.append(totalPrice)

//       this.btnMinus.onclick = this.onButtonClick.bind(this, 'decrement')
//       this.btnPlus.onclick = this.onButtonClick.bind(this, 'increment')

//       return item
//    }
//    render(targetSelector) {
//       const container = document.createElement('div')
//       container.className = 'container'
//       const item = this.createItem()
//       container.append(item)
//       document.querySelector(targetSelector).append(container)
//    }
// }

// window.onload = function () {
//    const it1 = new Product(
//       './img/hisense.webp',
//       'Телевізор Hisense 55A63H',
//       16999
//    )
//    it1.render('.container')
// }

// Динамічний пошук. Є список працівників і поле пошуку. При введенні відображаються усі, які містять вказаний фрагмент

// class Workers {
//    constructor(namesList) {
//       this.namesList = namesList
//    }
//    render(targetSelector) {
//       const container = document.createElement('div')
//       container.className = 'container'

//       this.input = document.createElement('input')
//       this.input.type = 'search'
//       this.input.className = 'input'
//       container.append(this.input)

//       const title = document.createElement('div')
//       title.className = 'title'
//       title.innerText = 'Працівники'
//       container.append(title)

//       document.querySelector(targetSelector).append(container)
//    }
// }

// const names = [
//    'Іванов І.І.',
//    'Петров П.П.',
//    'Скрипка С.П',
//    'Гончаренко Г.О.',
//    'Івась І.І.',
// ]

// window.onload = function () {
//    const workers = new Workers(names)
//    workers.render('.wrapper')
// }

function onClick(e) {
   alert(e.target.innerText)
}

document.querySelector('button').addEventListener('click', onClick)

let ev = new Event('click')
setTimeout(() => {
   document.querySelector('button').dispatchEvent(ev)
}, 5000)
