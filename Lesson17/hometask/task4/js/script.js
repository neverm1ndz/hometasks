// Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку)
function getRandomNum(min, max) {
   return min + Math.floor(Math.random() * (max - min + 1))
}

function getWish(arr) {
   for (let i = 0; i < 3; i++) {
      const randomIndex = getRandomNum(0, arr.length - 1)
      const newDiv = document.createElement('div')
      newDiv.innerHTML = arr[randomIndex]
      document.body.prepend(newDiv)
      arr.splice(randomIndex, 1)
   }
}

const array = ['Мир', 'Любов', 'Літо', 'Гроші', 'Дощ', 'Пельмені']

window.onload = function () {
   getWish(array)
}
