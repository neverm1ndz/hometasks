// Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

let K = parseInt(prompt('Введіть кількість предметів'))

function inputScores(itemsNum) {
   let scoresArr = []
   for (let i = 1; i <= itemsNum; i++) {
      const score = parseInt(prompt(`Введіть оцінку з ${i}-го предмета`))
      scoresArr.push(score)
   }
   return scoresArr
}

function getMinScore(allScores) {
   let minScore = allScores[0]
   for (let i = 1; i < allScores.length; i++) {
      if (allScores[i] < minScore) minScore = allScores[i]
   }
   return minScore
}

function getAverageScore(scoresArr) {
   let averageScore = 0
   for (let i = 0; i < scoresArr.length; i++) {
      averageScore += scoresArr[i]
   }
   averageScore = averageScore / scoresArr.length
   return averageScore
}

function getCategory(allScores) {
   let category
   for (let i = 0; i < allScores.length; i++) {
      if (minScore === 4) category = 'Хорошист'
      else if (minScore === 3) category = 'Трійочник'
      else if (minScore === 2) category = 'Двійочник'
      else category = 'Відмінник'
   }
   return category
}

const allScores = inputScores(K)
const averageScore = getAverageScore(allScores)
const minScore = getMinScore(allScores)
const studentCategory = getCategory(allScores)

document.write(`Середній бал = ${averageScore.toFixed(2)}<br> Учень належить до категорії ${studentCategory}`)

console.log(allScores, averageScore);


