// Користувач задає рік народження. Визначити кількість років користувача.

function getAge() {
   const birthYear = parseInt(document.querySelector('.year').value)
   if (!birthYear || !isFinite(birthYear) || !Number.isInteger(birthYear))
      throw new Error('Incorrect birth year')
   const userAge = new Date().getFullYear() - birthYear
   document.querySelector('.result').innerHTML = userAge
}

document.querySelector('.year').onchange = getAge
