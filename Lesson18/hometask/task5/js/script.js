// На формі вводять 7 числових значень (вік, зріст, вага, заробітна плата, стаж, номер відділу, порядковий
// номер). Додати подію обробки події click на форму і якщо клік на input, то автоматично замінювати значення
// його на 0.

class SomeForm {
   createItem(i) {
      const div = document.createElement('div')
      const label = document.createElement('label')
      label.className = 'label'
      if (i === 0) label.innerText = 'Вік'
      else if (i === 1) label.innerText = 'Зріст'
      else if (i === 2) label.innerText = 'Вага'
      else if (i === 3) label.innerText = 'Заробітна плата'
      else if (i === 4) label.innerText = 'Стаж'
      else if (i === 5) label.innerText = 'Номер відділу'
      else label.innerText = 'Порядковий номер'
      const inp = document.createElement('input')
      label.append(inp)
      div.append(label)
      return div
   }

   onInputClick(e) {
      if (e.target.tagName === 'INPUT') e.target.value = 0
   }

   render(targetSelector) {
      const form = document.createElement('form')
      for (let i = 0; i < 7; i++) {
         const item = this.createItem(i)
         form.append(item)
      }
      form.addEventListener('click', this.onInputClick.bind(this))
      document.querySelector(targetSelector).append(form)
   }
}

window.onload = function () {
   const form = new SomeForm()
   form.render('.container')
}
