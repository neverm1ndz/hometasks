// Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні бути
// зафарбовані у червоний колір.

function onClick(e) {
   if (e.target.tagName === 'DIV') {
      let div = e.target
      while (div) {
         if (div.classList.contains('black')) div.classList.remove('black')
         div.classList.add('red')
         div = div.nextElementSibling
      }

      div = e.target
      while (div) {
         if (div.classList.contains('red')) div.classList.remove('red')
         div.classList.add('black')
         div = div.previousElementSibling
      }
   }
}

document.querySelector('.container').addEventListener('click', onClick)
