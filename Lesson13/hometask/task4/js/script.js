// Розробити клас MultChecker для перевірки таблиці множення
// Поля
// Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
// Кількість правильних відповідей
// Кількість неправильних відповідей
// Методи
// Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
// Перевірка правильності вказаної відповіді
// render - виведення інформації про тестування на екран

class MultChecker {
   constructor(checkedNum) {
      this.checkedNum = checkedNum
      this.correctAnswersNum = 0
      this.incorrectAnswersNum = 0
   }
   generateTask() {
      let randomNum = 1 + Math.floor(Math.random() * 10)
      let correctAnswer = this.checkedNum * randomNum
      let usersAnswer = parseInt(prompt(`${this.checkedNum} * ${randomNum}`))
      return { usersAnswer, correctAnswer }
   }
   checkAnswer() {
      do {
         let { usersAnswer, correctAnswer } = this.generateTask()
         if (usersAnswer === correctAnswer) this.correctAnswersNum++
         else this.incorrectAnswersNum++
      } while (confirm('Бажаєте продовжити?'))
   }
   render() {
      document.write(`Число яке перевіряємо - ${this.checkedNum}<br>
         Правильних відповідей - ${this.correctAnswersNum}<br>
   Неправильних відповідей - ${this.incorrectAnswersNum}
         `)
   }
}

let multChecker = new MultChecker(7)

multChecker.checkAnswer()
multChecker.render()
