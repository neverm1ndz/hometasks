// Розробити клас «Керівник танців»
// Поля
// Масив імен хлопців
// Масив імен дівчат
// Методи
// Метод випадкового вибору імені хлопця
// Метод випадкового вибору імені дівчини
// Метод виведення пари для танців
// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців

const boysNamesList = ['Ivan', 'Petro', 'Andriy', 'Oleksandr', 'Roman', 'Yuriy']
const girlsNamesList = ['Olga', 'Oksana', 'Viktoria', 'Alina', 'Valeria']

class DanceManager {
   constructor(boysNamesList, girlsNamesList) {
      // Масив імен хлопців
      this.boysNamesList = boysNamesList
      // Масив імен дівчат
      this.girlsNamesList = girlsNamesList
   }
   getRandomIndex(array) {
      return Math.floor(Math.random() * array.length)
   }
   // Метод випадкового вибору імені хлопця
   getRandomBoyName() {
      const randomIndex = this.getRandomIndex(this.boysNamesList)
      return this.boysNamesList[randomIndex]
   }
   // Метод випадкового вибору імені дівчини
   getRandomGirlName() {
      const randomIndex = this.getRandomIndex(this.girlsNamesList)
      return this.girlsNamesList[randomIndex]
   }
   // Метод виведення пари для танців
   displayDanceCouple() {
      document.write(
         `${this.getRandomBoyName()} - ${this.getRandomGirlName()}<br>`
      )
   }
   // Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців
   run() {
      setInterval(() => this.displayDanceCouple(), 5000)
   }
}

const danceManager1 = new DanceManager(boysNamesList, girlsNamesList)
danceManager1.run()
