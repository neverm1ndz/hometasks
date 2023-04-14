class TTime {
   constructor(hours, minutes) {
      this.hours = hours
      this.minutes = minutes
   }
   increaseHours(val) {
      this.hours = (this.hours + val) % 24
   }
   decreaseHours(val) {
      this.hours -= val % 24
      this.hours = (this.hours + 24) % 24
   }
   increaseMinutes(val) {
      this.increaseHours(Math.floor((this.minutes + val) / 60))
      this.minutes = (this.minutes + val) % 60
   }
   decreaseMinutes(val) {
      this.decreaseHours(Math.ceil((val - this.minutes) / 60))
      this.minutes -= val % 60
      this.minutes = (this.minutes + 60) % 60
   }
   toString() {
      return `${this.hours} : ${this.minutes}`
   }
}

let hours = parseInt(prompt('Години'))
let minutes = parseInt(prompt('Хвилини'))
let time = new TTime(hours, minutes)
document.write(time)
time.decreaseHours(1)
time.decreaseMinutes(22343243243)
console.log(time)
