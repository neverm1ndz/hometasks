// ================Date ===============
// Задача  1. Користувач іде у відпустку на 56 днів. Визначити дату на момент його повернення.

// let date = new Date()
// console.log(date)
// date.setDate(date.getDate() + 56)
// console.log(date)

// Задача 2 . Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент.
// const year = parseInt(prompt('Рік'))
// const month = parseInt(prompt('Місяць'))
// const day = parseInt(prompt('День'))
// const term = parseInt(prompt('Придатність'))

// const date = new Date(year, month - 1, day)
// const currentDate = new Date()
// date.setDate(date.getDate() + term)

// if (date.getDate() >= currentDate.getDate()) alert('Придатний')
// else alert('Не придатний')

// Задача 3. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.
// function getRandomNum(min, max) {
//    return min + Math.floor(Math.random() * (max - min + 1))
// }
// function changeNums(arr, num1, num2) {
//    let temp = arr[num1]
//    arr[num1] = arr[num2]
//    arr[num2] = temp
// }
// function bubbleSort(arr) {
//    let copyArr = [...arr]
//    let start = new Date()
//    let change
//    do {
//       change = false
//       for (let i = 0; i < copyArr.length - 1; i++) {
//          if (copyArr[i] > copyArr[i + 1]) {
//             changeNums(copyArr, i, i + 1)
//             change = true
//          }
//       }
//    } while (change)
//    let end = new Date()
//    console.log(`Час сортування бульбашкою ${end - start}`)
//    return copyArr
// }

// function insertionSort(arr) {
//    let copyArr = [...arr]
//    let start = new Date()
//    for (let k = 1; k < copyArr.length; k++) {
//       let currentEl = copyArr[k]
//       i = k - 1
//       while (i >= 0 && copyArr[i] > currentEl) {
//          copyArr[i + 1] = copyArr[i]
//          i = i - 1
//       }
//       copyArr[i + 1] = currentEl
//    }
//    let end = new Date()
//    console.log(`Час сортування вставками ${end - start}`)
//    return copyArr
// }

// let arr2 = []
// for (let i = 0; i < 1000; i++) {
//    arr2.push(getRandomNum(1, 800))
// }
// console.log(arr2)
// let copyArr1 = bubbleSort(arr2)
// console.log(copyArr1)
// let copyArr2 = insertionSort(arr2)
// console.log(copyArr2)

// Задача 4. Задаємо користувачу задачу з додавання двох чисел. Визначити скільки секунд було використано для розв’язання задачі.
// function getRandomNum(min, max) {
//    return min + Math.floor(Math.random() * (max - min + 1))
// }

// const date1 = new Date()
// prompt(`${getRandomNum(1, 9)} + ${getRandomNum(1, 9)}`)
// const date2 = new Date()
// const diff = date2 - date1
// console.log(Math.floor(diff / 1000))

// ============ String===============

const arr = ['Петро', 'Іван', 'Ольга12', 'прнткш', 'Андрій60', 'Вася35']
const str =
   "Сьогодні, 29.04.2023, я з'їв 2 яблука, випив 1 склянку води і почув себе на 10 балів!"
const str2 =
   'Мій друг має банківську карту з номером 1234-5678-9101-1121, а моя карта має номер 9876-5432-1011-1213.'
const str3 = 'rada.gov.ua'
const str4 =
   '2020 рік був важким роком для світу через пандемію COVID-19. У 2021 році, завдяки вакцинації, світ сподівається на подолання пандемії. У 2022 році, світова економіка починає відновлюватися після кризи, спричиненої пандемією. У 2023 році, збільшення інвестицій у зелені технології допомагає зменшити вплив зміни клімату. У 2024 році, наукові досягнення у сфері штучного інтелекту та робототехніки набувають популярності. У 2025 році, розвиток космічної технології відкриває нові можливості для дослідження космосу.2031'
const str5 = '+380953452345'

// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
// const regex = /\d/i
// for (const el of arr) {
//    if (regex.test(el)) console.log(el)
// }

// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
// const regex = /^\D+$/

// for (const el of arr) {
//    if (regex.test(el)) console.log(el)
// }
// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
// const regex = /[аеєиіїоуюя]/

// for (const el of arr) {
//    if (regex.test(el)) console.log(el)
// }
// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
// const regex = /^[^аеєиіїоуюя]+$/

// for (const el of arr) {
//    if (regex.test(el)) console.log(el)
// }
// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
// const regex = /[13]/

// for (const el of arr) {
//    if (regex.test(el)) console.log(el)
// }
// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
// const regex = /\d+/g
// console.log(str.match(regex))

// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
// const regex = /[.,'!:;]/g
// console.log(str.match(regex))

// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
// const regex = /[.,!:;]/g
// console.log(str.split(regex).filter(el => el !== ''))

// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
// const regex = /\d{2}\.\d{2}\.\d{4}/
// console.log(regex.test(str))

// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
// const regex = /\b\d{2}\b/g
// console.log(str.match(regex).length)

// Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.
// const regex = /\d{4}-\d{4}-\d{4}-\d{4}/g
// if (regex.test(str2)) console.log(str2.match(regex))

// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
// const regex = /\.gov/i
// console.log(regex.test(str3))

// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення
// const regex = /(20[2-9][2-9]|20[3-9]\d|2[1-9]\d\d|[3-9]\d\d\d)/g
// console.log(str4.match(regex))

// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)
// const regex = /^\+?38/
// console.log(regex.test(str5))

// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
// let name = prompt("Прізвище та ім'я")
// name = name.replace(' ', '-')
// console.log(name)

// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»
// let date = prompt('day.month.year')
// date = date.replaceAll('.', '/')
// console.log(date)

// Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним
// const day = prompt('День')
// const regex = /^(0|6|sun|sat)$/i
// if (regex.test(day)) alert('Вихідний')
// else alert('Робочий')
