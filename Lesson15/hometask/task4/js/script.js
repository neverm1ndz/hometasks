//  Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник
// (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару,
// фільтрація за назвою фірми

class Maker {
   constructor(title) {
      this.title = title
      this.regNumber = new Date().getTime()
   }
   toString() {
      return `${this.title} - ${this.regNumber}<br>`
   }
}

class Product {
   #quantity
   constructor(title, unit, quantity, companyTitle) {
      this.title = title
      this.unit = unit
      this.Quantity = quantity
      this.maker = new Maker(companyTitle)
   }
   get Quantity() {
      return this.#quantity
   }
   set Quantity(val) {
      if (val < 0) throw new Error('Incorrect quantity value')
      this.#quantity = val
   }
   toString() {
      return `${this.title}, ${this.Quantity}${this.unit}, ${this.maker}<br>`
   }
}

class Warehouse {
   constructor() {
      this.productsList = []
   }
   registerProduct(product) {
      this.productsList.push(product)
   }
   productShipment(title, val) {
      this.productsList.find(el => el.title === title).Quantity -= val
   }
   filterProductTitle(title) {
      let filtredProductsList = this.productsList.filter(
         el => el.title === title
      )
      return filtredProductsList
   }
   filterMakerTitle(title) {
      let filtredProductsList = this.productsList.filter(
         el => el.maker.title === title
      )
      return filtredProductsList
   }
   toString() {
      return `${this.productsList.map(el => el.toString() + '<br>')}`
   }
}

let warehouse1 = new Warehouse()
warehouse1.registerProduct(new Product('Лосось', 'кг', 500, 'Megamare'))
warehouse1.registerProduct(new Product('Тунець', 'шт', 1200, 'Megamare'))
warehouse1.registerProduct(
   new Product('Печінка тріски', 'шт', 1300, 'Aquamarin')
)
console.log(warehouse1)
warehouse1.productShipment('Лосось', 300)
console.log(warehouse1.filterProductTitle('Тунець'))
console.log(warehouse1.filterMakerTitle('Aquamarin'))
document.write(warehouse1)
