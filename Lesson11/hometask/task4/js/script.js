//  З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одну букву наперед заданого слова. З використанням нього розробити гру «Прекладач». Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.

function getOneLetter(word) {
   let counter = 0
   function getLetter() {
      if (counter === word.length) counter = 0
      return word[counter++]
   }
   return getLetter
}

function gameTranslator(oneLetter, word, descr) {
   let guessedLetters = 0
   alert(descr)
   for (let i = 0; i < word.length; i++) {
      let userLetter = prompt('Введіть букву')
      let wordLetter = oneLetter()
      if (wordLetter === userLetter) guessedLetters++
   }
   return guessedLetters
}

let shadow = 'тінь'
let ice = 'лід'

let oneLetterShadow = getOneLetter(shadow)
let oneLetterIce = getOneLetter(ice)

let guessedLetters1 = gameTranslator(oneLetterShadow, shadow, 'По соломі ходить, а не шелестить')
let guessedLetters2 = gameTranslator(oneLetterIce, ice, 'І в огні не горить, і в воді не тоне')

console.log(oneLetterIce())
console.log(oneLetterIce())
console.log(oneLetterIce())
console.log(oneLetterIce())
console.log(oneLetterIce())

document.write(`Вгаданих букв у першому слові- ${guessedLetters1} <br>
Вгаданих букв у другому слові- ${guessedLetters2} <br>
`)


