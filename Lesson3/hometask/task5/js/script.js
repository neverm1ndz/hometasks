// 1. З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.

const driveCategory = prompt('Введіть категорію водія (A,B,C)', '')

if ((driveCategory === 'A') || (driveCategory === 'a'))
   document.write(`
<p>Водій може керувати мотоциклом</p>
`)
else if ((driveCategory === 'B') || (driveCategory === 'b'))
   document.write(`
<p>Водій може керувати легковим автомобілем</p>
`)
else if ((driveCategory === 'C') || (driveCategory === 'c'))
   document.write(`
<p>Водій може керувати вантажним автомобілем</p>
`)
else
   document.write(`
<p>Ви ввели некоректну категорію</p>
`)