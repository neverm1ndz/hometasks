// Створити об’єкт «Авто».
// Поля(властивості)
// Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів
// Методи (дії)
// Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів

function Auto(brand, tankSize, litersNum, seatsNum, passengersNum) {
   this.brand = brand
   this.tankSize = tankSize
   this.litersNum = litersNum
   this.seatsNum = seatsNum
   this.passengersNum = passengersNum
}

// Заправка на вказану кількість літрів
Auto.prototype.getRefueling = function (addedLitersNum) {
   this.litersNum += addedLitersNum
}

// Виведення кількості пасажирів
Auto.prototype.getPassengersNum = function () {
   console.log(`Кількість пасажирів - ${this.passengersNum}`)
}

// Додавання пасажирів
Auto.prototype.addPassengers = function (addedPassengersNum) {
   if (this.passengersNum + addedPassengersNum <= this.seatsNum)
      this.passengersNum += addedPassengersNum
   else alert('Не вистачає місць')
}

// Висадка пасажирів
Auto.prototype.removePassengers = function (removedPassengersNum) {
   this.passengersNum -= removedPassengersNum
}

let auto1 = new Auto('Audi', 65, 30, 5, 2)

console.log(auto1)
auto1.getRefueling(20)
console.log(auto1)
auto1.getPassengersNum()
auto1.addPassengers(2)
console.log(auto1)
auto1.removePassengers(3)
console.log(auto1)
