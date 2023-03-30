// Розробити клас Baner
// Поля
// Масив об’єктів ( графічних зображень та посилань на сайти)
// методи
// Метод випадкового вибору об’єкта (графічного зображення та посилання)
// Метод виведення випадкового банера

let banersArray = [
   {
      image: './img/citrus.png',
      link: 'https://www.ctrs.com.ua',
   },
   {
      image: './img/foxtrot.jpeg',
      link: 'https://www.foxtrot.com.ua',
   },
   {
      image: './img/rozetka.jpeg',
      link: 'https://rozetka.com.ua',
   },
]

class Baner {
   constructor(initBanersArray) {
      this.banersArray = initBanersArray
   }
   getRandomBaner() {
      let randomindex = Math.floor(Math.random() * this.banersArray.length)
      return this.banersArray[randomindex]
   }
   displayBaner() {
      let baner = this.getRandomBaner()
      document.write(`<a href='${baner.link}'><img src='${baner.image}'></a>`)
   }
}

let baner = new Baner(banersArray)
baner.displayBaner()
