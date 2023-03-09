// Дано масив імен. Сформувати масив з перших літер цих імен.

function getFirstLetters(array) {
   return array.map(element =>
      element[0]
   )
}

let namesList = ['Іван', 'Андрій', 'Петро', 'Роман', 'Олександр', 'Микола', 'Юрій']
console.log(namesList)

let firstLettersList = getFirstLetters(namesList)
console.log(firstLettersList)


