// 7. Вивести на екран N абзаців (N вводиться користувачем)

const parNum = parseInt(prompt('Введіть кількість абзаців'))
let result = ``
for (let i = 1; i <= parNum; i++) {
   result += `<h1>Заголовок ${i}</h1>`
   for (let j = 2; j <= parNum + 1; j++) {
      result += `
         <p>Розділ ${i}, параграф ${j - 1}<p>`
   }
   result += '<hr>'
}

document.write(result)