// 12. Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).

const lemon = 'Лимон ',
   pear = 'Груша ',
   apple = 'Яблуко ',
   ananas = 'Ананас '

let result = '',
   resultNum = '',
   resultText

for (let i = 0; i < 3; i++) {
   const random = 1 + Math.floor(Math.random() * 4)
   switch (random) {
      case 1: result += lemon, resultNum += '1'
         break
      case 2: result += pear, resultNum += '2'
         break
      case 3: result += apple, resultNum += '3'
         break
      case 4: result += ananas, resultNum += '4'
         break
   }
}

switch (resultNum) {
   case '111': resultText = 'Вітаємо, ви виграли 100грн'
      break;
   case '222': resultText = 'Вітаємо, ви виграли 200грн'
      break;
   case '333': resultText = 'Вітаємо, ви виграли 500грн'
      break;
   case '444': resultText = 'Вітаємо, ви виграли 1000грн'
      break;
   default: resultText = 'Пощастить наступного разу =('
      break;
}

document.write(`${resultText}<br>${result}`)

