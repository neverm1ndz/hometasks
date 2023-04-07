// Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.

class CompanyCar {
   static companyCarRef
   constructor(driver, brand, number) {
      if (CompanyCar.companyCarRef) return CompanyCar.companyCarRef
      this.driver = driver
      this.brand = brand
      this.number = number
      CompanyCar.companyCarRef = this
   }
}

let car1 = new CompanyCar('Ivan Petrovich', 'Audi', 'AO1568CH')
console.log(car1.driver)
let car2 = new CompanyCar('Petrovich', 'BMW', 'AO1010CH')
console.log(car2.driver)
