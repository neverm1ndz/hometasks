// Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба
// перемножати), AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні,
// які треба додавати). Обидва класи надсилають результати тестування об'єкту класу Hystory, який зберігає
// історію тестування у масиві у вигляді об'єктів
// Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля.
// Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування. Результати тестування додаються в об’єкт History.  Зробити так, щоб об'єкт такого класу можна було створити тільки один. Коли зроблено ці N задач вивести усю історію на екран.

class MultChecker {
   constructor(minNum, maxNum) {
      this.firstNum
      this.secondNum
      this.correctAnswer
      this.userAnswer
      this.operation = '*'
      this.minNum = minNum
      this.maxNum = maxNum
   }
   getRandomNum() {
      return (
         this.minNum +
         Math.floor(Math.random() * (this.maxNum - this.minNum + 1))
      )
   }

   getTest() {
      this.firstNum = this.getRandomNum()
      this.secondNum = this.getRandomNum()
      this.correctAnswer = this.firstNum * this.secondNum
      this.userAnswer = parseInt(prompt(`${this.firstNum}*${this.secondNum}`))
   }
}

class AddChecker {
   constructor(minNum, maxNum) {
      this.firstNum
      this.secondNum
      this.correctAnswer
      this.userAnswer
      this.operation = '+'
      this.minNum = minNum
      this.maxNum = maxNum
   }
   getRandomNum() {
      return (
         this.minNum +
         Math.floor(Math.random() * (this.maxNum - this.minNum + 1))
      )
   }

   getTest() {
      this.firstNum = this.getRandomNum()
      this.secondNum = this.getRandomNum()
      this.correctAnswer = this.firstNum + this.secondNum
      this.userAnswer = parseInt(prompt(`${this.firstNum}+${this.secondNum}`))
   }
}

class TestData {
   constructor({ firstNum, secondNum, operation, userAnswer, correctAnswer }) {
      this.firstNum = firstNum
      this.secondNum = secondNum
      this.operartion = operation
      this.userAnswer = userAnswer
      this.correctAnswer = correctAnswer
   }
   toString() {
      return `firstNum:${this.firstNum},
       secondNum:${this.secondNum}, 
       operation:\'${this.operartion}\',
       userAnswer:${this.userAnswer}, 
       correctAnswer:${this.correctAnswer}<br>`
   }
}

class History {
   constructor() {
      this.history = []
   }
   addTest(obj) {
      this.history.push(obj)
   }
   toString() {
      return `${this.history}`
   }
}

class TestManager {
   static testManagerObj
   constructor(tasksNum, minNum, maxNum) {
      if (TestManager.testManagerObj) return TestManager.testManagerObj
      this.history = new History()
      this.tasksNum = tasksNum
      this.minNum = minNum
      this.maxNum = maxNum
      TestManager.testManagerObj = this
   }
   startTest() {
      let count = this.tasksNum
      let timer = setInterval(() => {
         if (count === 0) {
            clearInterval(timer)
            this.printHistory()
         } else {
            let cheker = Math.random()
            if (cheker > 0.5) cheker = new MultChecker(this.minNum, this.maxNum)
            else cheker = new AddChecker(this.minNum, this.maxNum)
            cheker.getTest()
            let testData = new TestData(cheker)
            this.history.addTest(testData)
            count--
         }
      }, 3000)
   }
   printHistory() {
      document.write(`${this.history}`)
   }
}

const testManager = new TestManager(5, 1, 10)
testManager.startTest()
console.log(testManager)
