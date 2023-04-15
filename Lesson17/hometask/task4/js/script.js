// Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій частині екрану. Кожна зірка з певним
// кроком і інтервалом збільшується від мінімального до максимального розміру. Як тільки досягнути
// максимального розміру зірочка повинна з’являтися у іншій випадковій позиції.

class Stars {
   constructor(starsNum, starSrc, minSize, maxSize) {
      this.starsNum = starsNum
      this.starSrc = starSrc
      this.minSize = minSize
      this.maxSize = maxSize
   }

   getRandomStep() {
      return 1 + (Math.random() * 25) / 5
   }
   getRandomPosition() {
      return 1 + Math.floor(Math.random() * 97)
   }

   //----Для скейла--------------
   // random() {
   //    return (Math.floor(Math.random() * ((15 - 5) / 1 + 1)) * 1 + 5) / 10
   // }

   render(containerSelector) {
      for (let i = 0; i < this.starsNum; i++) {
         const star = document.createElement('img')
         star.className = 'star'
         star.src = this.starSrc
         star.style.width = this.minSize + 'px'
         star.style.left = this.getRandomPosition() + '%'
         star.style.top = this.getRandomPosition() + '%'
         document.querySelector(containerSelector).append(star)
         const step = this.getRandomStep()
         setInterval(() => {
            star.style.transition = 'width 0.5s ease-in-out 0s'
            star.style.width = parseFloat(star.style.width) + step + 'px'
            if (parseFloat(star.style.width) > this.maxSize) {
               star.style.transition = 'none'
               star.style.width = this.minSize + 'px'
               star.style.left = this.getRandomPosition() + '%'
               star.style.top = this.getRandomPosition() + '%'
            }
         }, 200)

         //-------З скейлом варіант---------------------
         // setInterval(() => {
         //    star.style.transition = `transform ${this.random()}s ease-in-out 0s`
         //    star.style.transform = 'scale(3)'
         //    if (
         //       getComputedStyle(star).transform === 'matrix(3, 0, 0, 3, 0, 0)'
         //    ) {
         //       star.style.transition = 'none'
         //       // star.style.width = this.minSize + 'px'
         //       star.style.left = this.getRandomPosition() + '%'
         //       star.style.top = this.getRandomPosition() + '%'
         //       star.style.transform = 'scale(1)'
         //    }
         // }, 200)
      }
   }
}

window.onload = function () {
   let stars = new Stars(80, './img/star.svg', 10, 40)
   stars.render('.container')
}
