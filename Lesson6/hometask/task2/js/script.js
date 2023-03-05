// 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була максимальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість клієнтів на вихідних.

function getVisitorsList(week) {
  let arr = []
  for (let i = 1; i <= week; i++) {
    let visitorsNum = parseInt(prompt(`Введіть кількість відвідувачів ${i}-го дня`))
    arr.push(visitorsNum)
  }
  return arr
}

function getDaysVisitorsLess_20(visitorsList) {
  let arr = []
  for (let i = 0; i < visitorsList.length; i++) {
    if (visitorsList[i] < 20) arr.push(i + 1)
  }
  return arr
}

function getMinVisitors(visitorsList) {
  let minVisitorsValue = visitorsList[0]
  for (let i = 1; i < visitorsList.length; i++) {
    if (visitorsList[i] < minVisitorsValue) minVisitorsValue = visitorsList[i]
  }
  return minVisitorsValue
}

function getMaxVisitors(visitorsList) {
  let maxVisitorsValue = visitorsList[0]
  for (let i = 1; i < visitorsList.length; i++) {
    if (visitorsList[i] > maxVisitorsValue) maxVisitorsValue = visitorsList[i]
  }
  return maxVisitorsValue
}

function getMinVisitorsDays(visitorsList, minVisitorsValue) {
  let arr = []
  for (let i = 0; i < visitorsList.length; i++) {
    if (visitorsList[i] === minVisitorsValue) arr.push(i + 1)
  }
  return arr
}

function getMaxVisitorsDays(visitorsList, maxVisitorsValue) {
  let arr = []
  for (let i = 0; i < visitorsList.length; i++) {
    if (visitorsList[i] === maxVisitorsValue) arr.push(i + 1)
  }
  return arr
}

function getTotalVisitorsWorkDays(visitorsList) {
  let totalVisitors = 0
  for (let i = 0; i < 5; i++) {
    totalVisitors += visitorsList[i]
  }
  return totalVisitors
}

function getTotalVisitorsHolidays(visitorsList) {
  let totalVisitors = 0
  for (let i = 5; i < visitorsList.length; i++) {
    totalVisitors += visitorsList[i]
  }
  return totalVisitors
}

const visitorsList = getVisitorsList(7)

const daysVisitorsLess_20 = getDaysVisitorsLess_20(visitorsList)

const minVisitorsValue = getMinVisitors(visitorsList)
const minVisitorsDays = getMinVisitorsDays(visitorsList, minVisitorsValue)

const maxVisitorsValue = getMaxVisitors(visitorsList)
const maxVisitorsDays = getMaxVisitorsDays(visitorsList, maxVisitorsValue)

const totalVisitorsWorkDays = getTotalVisitorsWorkDays(visitorsList)
const totalVisitorsHolidays = getTotalVisitorsHolidays(visitorsList)

document.write(`
  Номери днів, протягом яких кількість відвідувачів була меншою за 20 - ${daysVisitorsLess_20}<br>
  Номери днів, коли кількість відвідувачів була мінімальною - ${minVisitorsDays}<br>
  Номери днів, коли кількість відвідувачів була максимальною - ${maxVisitorsDays}<br>
  Загальна кількість клієнтів у робочі дні - ${totalVisitorsWorkDays}<br>
  Загальна кількість клієнтів на вихідних - ${totalVisitorsHolidays}
`)









