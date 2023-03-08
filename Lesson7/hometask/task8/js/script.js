// Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

function getNumbersBegin_A(array) {
   let newArray = []
   array.forEach(element => {
      if (element[0] === 'А')
         newArray.push(element)
   });
   return newArray
}

let numbersList = ['ВО3210АВ', 'АО1517АХ', 'АТ4250СН', 'ВА3680АВ', 'КО1012ВА', 'АО0030АС']
console.log(numbersList);

let numbersListBegin_A = getNumbersBegin_A(numbersList)
console.log(numbersListBegin_A);


