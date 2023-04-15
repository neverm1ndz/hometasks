// Байрактар. З верхньої частини екрану у випадковій позиції по горизонталі з’являються танки, які їдуть вниз.
// При кліку на танк він вибухає і зникає з екрану.

class Bayraktar {
   constructor(imgSrc, interval) {
      this.imgSrc = imgSrc
      this.interval = interval
      this.counter = 0
   }
   getRandomPosition() {
      return Math.floor(Math.random() * 97)
   }

   destroyTank(tank, int) {
      tank.style.transform = 'scale(0) rotate(360deg)'
      clearInterval(int)
      setTimeout(() => {
         tank.remove()
         document.querySelector('.counter').innerHTML = ++this.counter
      }, 900)
   }
   render(containerSelector) {
      setInterval(() => {
         const tank = document.createElement('img')
         tank.className = 'tank'
         tank.src = this.imgSrc
         tank.style.left = this.getRandomPosition() + '%'
         tank.style.top = '-8%'
         tank.style.transition =
            'top 0.2s ease-in-out 0s, transform 1s ease-in-out 0s'
         document.querySelector(containerSelector).append(tank)
         let int = setInterval(() => {
            tank.style.top = parseFloat(tank.style.top) + 3 + '%'
            if (parseFloat(tank.style.top) > 100) tank.remove()
         }, 200)
         tank.onclick = this.destroyTank.bind(this, tank, int)
      }, this.interval * 1000)
   }
}

window.onload = function () {
   const bayraktar = new Bayraktar('./img/tank.png', 2)
   bayraktar.render('.container')
}
