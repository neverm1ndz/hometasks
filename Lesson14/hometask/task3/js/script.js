// Задача 3. Об’єкт “Фірма” (використати члени-класи)
// поля
// назва фірми;
// дата заснування (рік, місяць);
// послуги (назва послуги, вартість, термін виконання);
// адреси філіалів (країна, місто, вулиця, номер будинку);
// методи
// визначення кількості років існування фірми;
// виведення всіх філіалів фірми у вказаному місті;
// виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;

class Company {
   constructor(title, creationDate, services, branches) {
      this.title = title
      this.creationDate = creationDate
      this.services = services
      this.branches = branches
   }

   // визначення кількості років існування фірми;
   getNumberOfYears() {
      return new Date().getFullYear() - this.creationDate.Year
   }

   // виведення всіх філіалів фірми у вказаному місті;
   getBranchesInCity(city) {
      for (const branch of this.branches) {
         if (branch.city === city) document.write(`${branch}<br>`)
      }
   }

   // виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;
   getServicesThatCanBePerformed(price, deadline) {
      for (const service of this.services) {
         if (service.price <= price && service.deadline <= deadline)
            document.write(`${service}<br>`)
      }
   }

   toString() {
      return `
      Назва - ${this.title}<br>
      Дата заснування - ${this.creationDate}<br>
      Послуги: ${this.services}<br>
      Філіали: ${this.branches}<br>
      `
   }
}

// дата заснування (рік, місяць);
class CreationDate {
   #year
   #month
   constructor(year, month) {
      this.Year = year
      this.Month = month
   }
   //--------------------------
   get Year() {
      return this.#year
   }
   get Month() {
      return this.#month
   }
   //--------------------------
   set Year(val) {
      if (val < 0) throw new Error('Incorrect year')
      this.#year = val
   }
   set Month(val) {
      if (val < 1 || val > 12) throw new Error('Incorrect month')
      this.#month = val
   }
   //--------------------------
   toString() {
      return `${this.Month} ${this.Year}`
   }
}

class Service {
   #title
   #price
   #deadline
   constructor(title, price, deadline) {
      this.Title = title
      this.Price = price
      this.Deadline = deadline
   }

   //--------------------------
   get Title() {
      return this.#title
   }
   get Price() {
      return this.#price
   }
   get Deadline() {
      return this.#deadline
   }
   //--------------------------
   set Title(val) {
      if (val.length === 0) throw new Error('Title incorrect')
      this.#title = val
   }
   set Price(val) {
      if (val < 0) throw new Error('Price incorrect')
      this.#price = val
   }
   set Deadline(val) {
      if (val < 0) throw new Error('Deadline incorrect')
      this.#deadline = val
   }
   //--------------------------
   toString() {
      return `
   ${this.title} - ${this.price}грн - ${this.deadline} дн
   `
   }
}

class Branch {
   constructor(country, city, street, number) {
      this.country = country
      this.city = city
      this.street = street
      this.number = number
   }
   toString() {
      return `
      ${this.country} - м. ${this.city} - вул. ${this.street} ${this.number}
      `
   }
}

//-----------------ROZETKA SERVICES-----------------

let rozetkaService1 = new Service('Втановлення розеток', 250, 2),
   rozetkaService2 = new Service('Заміна проводки', 350, 3),
   rozetkaService3 = new Service('Заміна лампи', 150, 1)
let rozetkaServices = [rozetkaService1, rozetkaService2, rozetkaService3]

//-----------------ROZETKA BRANCHES-----------------

let rozetkaUzhgorod1 = new Branch('Україна', 'Ужгород', 'Свободи', 25),
   rozetkaMukachevo1 = new Branch('Україна', 'Мукачево', 'Духновича', 20),
   rozetkaKhust1 = new Branch('Україна', 'Хуст', 'Корятовича', 15),
   rozetkaUzhgorod2 = new Branch('Україна', 'Ужгород', 'Корзо', 30)

let rozetkaBranches = [
   rozetkaUzhgorod1,
   rozetkaMukachevo1,
   rozetkaKhust1,
   rozetkaUzhgorod2,
]
//-----------------ROZETKA CREATION DATE-----------------

let rozetkaCreationDate = new CreationDate(2020, 8)

//-----------------ROZETKA COMPANY-----------------

let rozetkaCompany = new Company(
   'Rozetka',
   rozetkaCreationDate,
   rozetkaServices,
   rozetkaBranches
)

document.write(rozetkaCompany)
console.log(rozetkaCompany)
console.log(rozetkaCompany.branches)
rozetkaCompany.getBranchesInCity('Ужгород')
rozetkaCompany.getServicesThatCanBePerformed(300, 2)
