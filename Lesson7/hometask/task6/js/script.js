// Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2

function doubleBiggerThanFirstElem(array) {
   array.forEach((element, index, array) => {
      if (element > array[0]) array[index] *= 2
   });
   return array
}

let array = [22, 8, 15, 30, 25, 10, -7, 18, 40]
console.log(array);

array = doubleBiggerThanFirstElem(array)
console.log(array)








