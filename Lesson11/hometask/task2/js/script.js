// Нехай x0 = x1 = 1, xI = xI_1 + 2 * xI_2, де I = 2,3,... Визначити Xn. Розв’язати з використанням рекурсивних і нерекурсивних алгоритмів

//------ Рекурсивний алгоритм

function recursionFunction(n) {
   if (n === 0 || n === 1) return 1
   return recursionFunction(n - 1) + (2 * recursionFunction(n - 2))
}

console.log(recursionFunction(10))

//------ Нерекурсивний алгоритм

function notRecursionFunction(n) {
   let x_n
   if (n === 0 || n === 1) return 1
   else {
      let x_n_1 = x_n_2 = 1
      for (let i = 2; i <= n; i++) {
         x_n = x_n_1 + 2 * x_n_2
         x_n_2 = x_n_1
         x_n_1 = x_n
      }
   }
   return x_n
}

console.log(notRecursionFunction(6))




