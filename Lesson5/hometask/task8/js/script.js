// Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”></a>

const titleGoogle = 'Переходимо на Google'
const linkGoogle = 'https://www.google.com.ua/'
const imageGoogle = `<img width='300px' src='img/google.png'>`

function getBanner(title, image, link) {
   const banner = `
      <h1>${title}</h1>
      <a target='_blank' href='${link}'>${image}</a>
      `
   return banner
}

const bannerGoogle = getBanner(titleGoogle, imageGoogle, linkGoogle)

document.write(bannerGoogle)