// З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального. Якщо значення досягне максимального, то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців. 


function getMonthNum(min, max) {
   let counter = min
   function counterFunc() {
      if (counter > max) counter = min
      return counter++
   }
   return counterFunc
}

let counterMonthNum = getMonthNum(1, 12)

console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())
console.log(counterMonthNum())




