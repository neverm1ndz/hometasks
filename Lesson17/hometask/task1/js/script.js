// Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку

class Card {
   constructor(initData) {
      Object.assign(this, initData)
   }

   mouseOver(card) {
      card.classList.add('active')
   }
   mouseLeave(card) {
      card.classList.remove('active')
   }

   render(containerSelector) {
      const cardContainer = document.createElement('a')
      cardContainer.className = 'card-container'
      cardContainer.href = this.link
      cardContainer.target = '_blank'

      const cardCategory = document.createElement('div')
      cardCategory.className = 'card-category'
      if (this.category === 'Топ продаж') cardCategory.classList.add('top')
      if (this.category === 'Акція') cardCategory.classList.add('share')

      cardCategory.innerHTML = this.category
      cardContainer.append(cardCategory)

      const imageContainer = document.createElement('div')
      imageContainer.className = 'image-container'
      cardContainer.append(imageContainer)

      const cardImage = document.createElement('img')
      cardImage.className = 'card-image'
      cardImage.src = this.imageSrc
      imageContainer.append(cardImage)

      const cardTitle = document.createElement('div')
      cardTitle.className = 'card-title'
      cardTitle.innerHTML = this.title
      cardContainer.append(cardTitle)

      const cardPrice = document.createElement('div')
      cardPrice.className = 'card-price'
      cardPrice.innerHTML = this.price
      cardContainer.append(cardPrice)

      document.querySelector(containerSelector).append(cardContainer)

      cardContainer.onmouseover = this.mouseOver.bind(this, cardContainer)
      cardContainer.onmouseleave = this.mouseLeave.bind(this, cardContainer)
   }
}

const cardList = [
   {
      imageSrc: './img/1.webp',
      link: 'https://rozetka.com.ua/acer_nh_qbfeu_00c/p288376303/',
      title: 'Ноутбук Acer Aspire',
      price: '30 999',
      category: 'Топ продаж',
   },
   {
      imageSrc: './img/2.webp',
      link: 'https://rozetka.com.ua/lenovo-82hl00hcra/p352335126/',
      title: 'Ноутбук Asus Laptop',
      price: '19 999',
      category: 'Топ продаж',
   },
   {
      imageSrc: './img/3.webp',
      link: 'https://rozetka.com.ua/asus-90nr03u2-m008e0/p353689830/',
      title: 'Ноутбук Lenovo IdeaPad',
      price: '13 999',
      category: 'Акція',
   },
   {
      imageSrc: './img/4.webp',
      link: 'https://rozetka.com.ua/apple_macbook_air_13_m1_256gb_2020_space_gray/p245161909/',
      title: 'Ноутбук Apple MacBook Air',
      price: '39 999',
      category: 'Топ продаж',
   },
]

window.onload = function () {
   for (const obj of cardList) {
      const card = new Card(obj)
      card.render('.container')
   }
}
