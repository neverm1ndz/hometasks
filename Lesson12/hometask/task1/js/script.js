// Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості ------
// назва компанії на час розробки (назву періодично змінюють)
// власник компанії
// споснсори (масив спонсорів)
//              * прізвище спонсора
//       * ім’я  спонсора
//       * сума вкладень спонсора
// рік випуску
// вартість сайту
// Знайти:
// 1) загальну вартість усіх сайтів
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
// 5) знайти рік, коли прибуток був найбільшим
// 6) упорядкувати список за спаданням прибутку
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

let sitesList = [
   {
      title: 'Title 0',
      owner: 'Owner 0',
      sponsors: [
         {
            secondName: 'Stark',
            firstName: 'Eddard',
            investmentsSum: 37000,
         },
         {
            secondName: 'Baratheon',
            firstName: 'Robert',
            investmentsSum: 32000,
         },
         {
            secondName: 'Lannister',
            firstName: 'Tyrion',
            investmentsSum: 20000,
         },
      ],
      year: 2005,
      price: 9000,
   },
   {
      title: 'Title 1',
      owner: 'Owner 1',
      sponsors: [
         {
            secondName: 'Clegane',
            firstName: 'Sandor',
            investmentsSum: 42000,
         },
         {
            secondName: 'Snow',
            firstName: 'John',
            investmentsSum: 26000,
         },
         {
            secondName: 'Targaryen',
            firstName: 'Daenerys',
            investmentsSum: 15000,
         },
      ],
      year: 2017,
      price: 250000,
   },
   {
      title: 'Title 2',
      owner: 'Owner 2',
      sponsors: [
         {
            secondName: 'Martell',
            firstName: 'Oberyn',
            investmentsSum: 36000,
         },
         {
            secondName: 'Lannister',
            firstName: 'Jaime',
            investmentsSum: 43000,
         },
         {
            secondName: 'Lannister',
            firstName: 'Cersei',
            investmentsSum: 56000,
         },
      ],
      year: 2008,
      price: 8000,
   },
   {
      title: 'Title 3',
      owner: 'Owner 3',
      sponsors: [
         {
            secondName: 'Baelish',
            firstName: 'Petyr',
            investmentsSum: 60000,
         },
         {
            secondName: 'Stark',
            firstName: 'Arya',
            investmentsSum: 37000,
         },
         {
            secondName: 'Stark',
            firstName: 'Sansa',
            investmentsSum: 56000,
         },
      ],
      year: 1998,
      price: 320000,
   },
]

console.log(sitesList)

// 1) загальну вартість усіх сайтів
const totalPrice = sitesList.reduce((acc, site) => acc + site.price, 0)
console.log(`Загальна вартість усіх сайтів - ${totalPrice}`)

// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
const sitesNumYear_2000_2009 = sitesList.reduce((acc, site) => {
   if (site.year > 2000 && site.year < 2009) return ++acc
   return acc
}, 0)
console.log(
   `Кількість сайтів, що було зроблено між 2000 та 2009 рр. -  ${sitesNumYear_2000_2009}`
)

// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
const sitesNumInvestmentOver_100000 = sitesList.reduce((acc, site) => {
   if (
      site.sponsors.reduce((acc, sponsor) => acc + sponsor.investmentsSum, 0) >
      100000
   )
      return ++acc
   return acc
}, 0)
console.log(
   `Кількість сайтів, де сума спонсорських вкладень була більшою за 100000 - ${sitesNumInvestmentOver_100000}`
)

// let sitesNumInvestmentOver_100000 = 0
// for (const site of sitesList) {
//    let totalInvestmentSum = 0
//    for (const sponsor of site.sponsors) {
//       totalInvestmentSum += sponsor.investmentsSum
//    }
//    if (totalInvestmentSum > 100000) sitesNumInvestmentOver_100000++
// }
// console.log(`Кількість сайтів, де сума спонсорських вкладень була більшою за 100000 - ${sitesNumInvestmentOver_100000}`)

// 4) створити загальний список усіх спонсорів(поки можуть повторюватись, просто зібрати усі у масив)
let allSponsorsNames = []
for (const site of sitesList) {
   for (const sponsor of site.sponsors) {
      allSponsorsNames.push(`${sponsor.firstName} ${sponsor.secondName}`)
   }
}

// const allSponsorsNames = sitesList.map(site =>
//    site.sponsors.map(sponsor =>
//       `${sponsor.firstName} ${sponsor.secondName}`
//    )
// )

console.log(allSponsorsNames)

// 5) знайти рік, коли прибуток був найбільшим

let maxPrice = -Infinity
let maxPriceYear
for (const site of sitesList) {
   if (site.price > maxPrice) {
      maxPrice = site.price
      maxPriceYear = site.year
   }
}
console.log(`Найбільший прибуток ${maxPrice} був у ${maxPriceYear} році`)

// let maxPriceYear = sitesList.reduce((acc, { price, year }) => {
//    if (price > acc.maxPrice) {
//       acc.maxPrice = price
//       acc.year = year
//    }
//    return acc
// }
//    , {
//       maxPrice: - Infinity,
//       year: 0
//    })
// console.log(maxPriceYear)

// 6) Упорядкувати список за спаданням прибутку

let pricesList = sitesList.map(site => site.price)
let sortedSitesList = JSON.parse(JSON.stringify(sitesList))
for (let k = 1; k < pricesList.length; k++) {
   let currentEl = pricesList[k]
   let currentObj = sortedSitesList[k]
   let i = k - 1
   while (i >= 0 && pricesList[i] < currentEl) {
      pricesList[i + 1] = pricesList[i]
      sortedSitesList[i + 1] = sortedSitesList[i]
      i--
   }
   pricesList[i + 1] = currentEl
   sortedSitesList[i + 1] = currentObj
}
console.log(sortedSitesList)

// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

function createTwoLists(sitesList) {
   let sitesListWithPriceLess_10000 = []
   let sitesListWithPriceOver_10000 = []
   for (const site of sitesList) {
      site.price >= 10000
         ? sitesListWithPriceOver_10000.push(JSON.parse(JSON.stringify(site)))
         : sitesListWithPriceLess_10000.push(JSON.parse(JSON.stringify(site)))
   }
   return { sitesListWithPriceLess_10000, sitesListWithPriceOver_10000 }
}

const twoListsOfSites = createTwoLists(sitesList)

console.log(twoListsOfSites)
