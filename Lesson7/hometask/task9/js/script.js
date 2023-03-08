// Дано масив імен. Сформувати масив з перших літер цих імен.

function getFirstLetters(array) {
   let firstLettersList = array.map(element =>
      element[0]
   )
   return firstLettersList
}

let namesList = ['Іван', 'Андрій', 'Петро', 'Роман', 'Олександр', 'Микола', 'Юрій']
console.log(namesList)

let firstLettersList = getFirstLetters(namesList)
console.log(firstLettersList)


