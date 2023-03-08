// Дано масив елементів. Вивести на екран елементи, що більші за 100

function getElemsGreater_100(array) {
   let newArray = []
   for (const element of array)
      if (element > 100) newArray.push(elem)
   return newArray
}

let array = [24, 107, 67, -30, 250, 132, 82, 432, 46, 170]
let newArrayGreater_100 = getElemsGreater_100(array)

document.write(newArrayGreater_100)







