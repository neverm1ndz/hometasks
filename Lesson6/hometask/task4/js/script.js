// Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// •	починаються на букву «А»;
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів;

const carNumbersList = ['АО1568СНf', 'АО4512АХ', 'АА1234СА', 'ХА3212СХ', 'НА2245ХА', 'КА3456СВ', 'АО6543СА', 'Н12Б',]

function getNumberFirstLetterA(numbersList) {
   let result = 0
   for (let i = 0; i < numbersList.length; i++) {
      if (numbersList[i][0] === 'А') result++
   }
   return result
}

function getSameFirstAndLastLetters(numbersList) {
   let result = 0
   for (let i = 0; i < numbersList.length; i++) {
      if (numbersList[i][0] === numbersList[i][numbersList[i].length - 1])
         result++
   }
   return result
}

function getMoreThanFiveSymbols(numbersList) {
   let result = 0
   for (let i = 0; i < numbersList.length; i++) {
      if (numbersList[i][5]) result++
   }
   return result
}

const firstLetterA = getNumberFirstLetterA(carNumbersList)
const sameFirstAndLastLetters = getSameFirstAndLastLetters(carNumbersList)
const moreThanFiveSymbols = getMoreThanFiveSymbols(carNumbersList)

document.write(`
Починаються на букву «А» - ${firstLetterA}<br>
Перша і остання літери співпадають - ${sameFirstAndLastLetters}<br>
Складаються з більше ніш 5 символів - ${moreThanFiveSymbols}<br>
`)







