//  Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

function getNameIvan(names) {
   let nameIvan = 0
   for (let i = 0; i < names.length; i++) {
      if (names[i] === 'Іван') nameIvan++
   }
   return nameIvan
}

let studentsNamesList = ['Андрій', 'Іван', 'Роман', 'Петро', 'Євген', 'Іван', 'Іван']

const nameIvan = getNameIvan(studentsNamesList)

document.write(`Ім'я Іван зустрічається ${nameIvan} разів`)


