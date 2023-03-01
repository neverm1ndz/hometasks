//  Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

function getRandomImage(num1, num2, num3, num4) {
   let randomNum = Math.floor(Math.random() * 4)
   return arguments[randomNum]
}

const image1 = `<img width='100px' src='img/1.png'>`
const image2 = `<img width='100px' src='img/2.png'>`
const image3 = `<img width='100px' src='img/3.png'>`
const image4 = `<img width='100px' src='img/4.png'>`

const randomImage = getRandomImage(image1, image2, image3, image4)

document.write(randomImage)