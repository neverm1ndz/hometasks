// Відобразити падаючий сніг. Сніжинка з’являється у верхній частині екрану і з випадковою швидкістю рухається вниз. Як тільки сніжинка досягає нижньої частини екрану вона знову повинна з’явитись у верхній частині екрану.

class Snow {
   getRandomPositionLeft() {
      return Math.floor(Math.random() * 95)
   }
   getRandomSpeed() {
      return 1 + (Math.random() * 25) / 5
   }

   render(containerSelector) {
      this.snow = document.createElement('img')
      this.snow.className = 'snow'
      this.snow.src = './img/snow.svg'
      this.snow.style.left = this.getRandomPositionLeft() + '%'
      this.snow.style.top = '-8%'
      const speed = this.getRandomSpeed()
      setInterval(() => {
         this.snow.style.transition = 'top 0.1s ease-in-out 0s'
         this.snow.style.top = parseFloat(this.snow.style.top) + speed + '%'
         if (parseFloat(this.snow.style.top) > 105) {
            this.snow.style.transition = 'none'
            this.snow.style.top = '-8%'
            this.snow.style.left = this.getRandomPositionLeft() + '%'
         }
      }, 100)

      document.querySelector(containerSelector).append(this.snow)
   }
}

window.onload = function () {
   let i
   for (i = 0; i < 30; i++) {
      let snow = new Snow()
      snow.render('.container')
   }
}
