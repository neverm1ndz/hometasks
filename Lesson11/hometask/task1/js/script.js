//  Нехай x0 = 1,xI = xI_1 + 2*I , де I = 1,2,.... Визначити x10. Розв’язати з використанням рекурсивних і нерекурсивних алгоритмів

//------Рекурсивний алгоритм

function recursionFunction(i) {
   if (i === 0) return 1
   return recursionFunction(i - 1) + (2 * i)
}

console.log(recursionFunction(10))

//------Нерекурсивний алгоритм

function notRecursionFunction(i) {
   let x_i
   if (i === 0) return 1
   else {
      let x_i_1 = 1
      for (let j = 1; j <= i; j++) {
         x_i = x_i_1 + (2 * j)
         x_i_1 = x_i
      }
   }
   return x_i
}

console.log(notRecursionFunction(10))


