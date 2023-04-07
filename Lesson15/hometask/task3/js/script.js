// Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь
// подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. Зробити так,
// щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни
// повідомлення без зупинки таймера.

class Reminder {
   static reminderRef
   constructor(message, time) {
      if (Reminder.reminderRef) return Reminder.reminderRef
      this.time = time
      this.message = message
      this.counter = 1
      this.timer
      Reminder.reminderRef = this
   }

   stop(time) {
      setTimeout(() => {
         clearInterval(this.timer)
      }, time * 1000)
   }

   changeMessage(val, time) {
      setTimeout(() => {
         this.message = val
      }, time * 1000)
   }
   start() {
      this.timer = setInterval(() => {
         document.write(`${this.counter}. ${this.message}<br>`)
         this.counter++
      }, this.time * 1000)
   }
}

let reminder = new Reminder('Hello mentor!', 1)
reminder.start()
reminder.changeMessage('Hello dear mentor!', 5)
reminder.stop(7)
