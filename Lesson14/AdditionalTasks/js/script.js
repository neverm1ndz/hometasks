// Сортування вставками

// function candiesToBuy(kids) {
//    if (kids === 1) return 1
//    let prev = 1
//    for (let i = 2; i <= kids; i++) {
//       let a = prev
//       let b = i
//       let nsd
//       nsd = GCD(a, b)
//       nsk = (i * prev) / nsd
//       a = nsk
//       prev = nsk
//    }
//    return nsk
// }

// function GCD(num1, num2) {
//    if (num2 !== 0) return GCD(num2, num1 % num2)
//    else return num1
// }

// console.log(candiesToBuy(40))

//Розбиваємо число на дільники, які будемо використовувати для знаходження НСК
//(одночасно фільтруємо так, щоб не було таких, що можуть один на одного ділитись без остачі - тобто вони нам не обовʼязкові для знаходження розвʼязку)
// function getDividers(number) {
//    let multipliers = []
//    for (let i = number; i > 1; i--) {
//       if (multipliers.every(element => element % i !== 0)) {
//          multipliers.push(i)
//       }
//    }
//    return multipliers
// }

// //Функція пошуку Найбільшого Спільного Дільника (НСД) - Greatest Common Divisor (GCD)
// function GCD(num1, num2) {
//    if (num2 !== 0) return GCD(num2, num1 % num2)
//    else return num1
// }

// //Функція пошуку Найменшого Спільного Кратного (НСК) - Least Common Multiple (LCM)
// function LCM(num1, num2) {
//    return (num1 * num2) / GCD(num1, num2)
// }

// //ТУТ ВИКОРИСТОВУЄМО НАСТУПНУ ТЕОРЕМУ: (для пошуку НСК довільної кількості чисел)
// //Припустимо, що ми маємо цілі числа a1 ,a2 , … ,ak.
// //НОК m_k цих чисел знаходиться при послідовному обчисленні m_2 = НОК(a1 , a2) , m_3 = НОК(m_2 , a3), … , m_k = НОК (m_k − 1 , ak) .
// function LCMforArr(arr) {
//    return arr.reduce((prevValue, element) => LCM(prevValue, element))
// }

// function candiesToBuy(kids) {
//    if (kids === 1) return 1
//    else {
//       let inputMultipliers = getDividers(kids)
//       return LCMforArr(inputMultipliers)
//    }
// }

// console.log(candiesToBuy(10))

function hanoi(start, middle, end, num) {
   if (num === 1) console.log(`${start} --> ${end}`)
   else hanoi('A', 'C', 'B', num - 1)
   console.log(`${start} --> ${end}`)

   hanoi('B', 'A', 'C', num - 1)
}
document.write(hanoi('A', 'B', 'C', 4))
