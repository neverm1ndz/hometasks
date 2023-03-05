// Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.

const studentScores = [5, 3, 4, 5, 5, 4, 2, 3, 4, 4, 5, 3, 4, 4, 5, 5, 2, 3]

function getBadScores(studentScores) {
   let badScores = 0
   for (let i = 0; i < studentScores.length; i++) {
      if (studentScores[i] === 2) badScores++
   }
   return badScores
}

function getGoodScores(studentScores) {
   let goodScores = 0
   for (let i = 0; i < studentScores.length; i++) {
      if (studentScores[i] >= 4) goodScores++
   }
   return goodScores
}

function getAverageScore(studentScores) {
   let scoresSum = 0
   for (let i = 0; i < studentScores.length; i++) {
      scoresSum += studentScores[i]
   }
   return scoresSum / studentScores.length
}

function getScoresLessThanAverage(studentScores) {
   let result = 0
   for (let i = 0; i < studentScores.length; i++) {
      if (studentScores[i] < averageScore) result++
   }
   return result
}

const badScores = getBadScores(studentScores)
const goodScores = getGoodScores(studentScores)
const averageScore = getAverageScore(studentScores)
const scoresLessThanAverage = getScoresLessThanAverage(studentScores)

console.log(averageScore)

document.write(`
1)	Двійок - ${badScores}<br>
2)	Кількість хороших оцінок (добре, відмінно) - ${goodScores}<br>
3)	Кількість оцінок, які нижче середнього - ${scoresLessThanAverage}<br>
`)


