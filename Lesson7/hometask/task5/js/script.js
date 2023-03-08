// Дано масив елементів. Знайти добуток додатних елементів

function getProductPositiveElems(array) {
   let product = 1
   for (const element of array) {
      if (element > 0) product *= element
   }
   return product
}

let array = [2, 4, -6, -8, 10, 8, -3, 3, -6]
let productPositiveElems = getProductPositiveElems(array)

document.write(productPositiveElems)
