// Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично заповнювати інші (усі
// попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), усі наступні на 1
// більше (кожен наступне на 1 більше за попереднього).

class InputsValue {
   constructor(number) {
      this.number = number
   }

   createInput(val) {
      const label = document.createElement('label')
      label.className = 'label'
      label.innerText = `Value ${val}`
      const input = document.createElement('input')
      input.className = 'input'
      input.type = 'number'
      label.append(input)
      return label
   }

   fillInputs(e) {
      if (e.target.tagName === 'INPUT') {
         let inp = e.target
         let label = inp.parentElement
         let nextInp
         while (label.nextElementSibling) {
            nextInp = label.nextElementSibling.firstElementChild
            if (inp.value === '') nextInp.value = ''
            else nextInp.value = parseFloat(inp.value) + 1
            inp = nextInp
            label = label.nextElementSibling
         }

         inp = e.target
         label = inp.parentElement
         while (label.previousElementSibling) {
            nextInp = label.previousElementSibling.firstElementChild
            if (inp.value === '') nextInp.value = ''
            else nextInp.value = parseFloat(inp.value) - 1
            inp = nextInp
            label = label.previousElementSibling
         }
      }
   }

   render(targetSelector) {
      const container = document.createElement('div')
      for (let i = 1; i <= this.number; i++) {
         const inp = this.createInput(i)
         container.append(inp)
      }
      container.addEventListener('input', this.fillInputs.bind(this))
      document.querySelector(targetSelector).append(container)
   }
}

window.onload = function () {
   const inp = new InputsValue(5)
   inp.render('.container')
}
