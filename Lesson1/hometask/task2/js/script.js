// Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два
//             стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на
//             зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен
//             переміщається у загальний список.

class SportsManager {
   constructor(sportsList) {
      this.sportsList = sportsList
   }

   addSportsman() {
      for (const el of this.sportsList) {
         const sportsman = document.createElement('div')
         sportsman.className = 'sportsman'
         this.totalListBody.append(sportsman)
         const sportsmanName = document.createElement('div')
         sportsmanName.innerHTML = el
         sportsman.append(sportsmanName)
         const img = document.createElement('img')
         img.className = 'arrow'
         img.src = this.greenArrowSrc
         sportsman.append(img)
      }
   }

   manageSportsmanList(sportsman, arrow) {
      if (!sportsman.classList.contains('active')) {
         sportsman.classList.add('active')
         sportsman.remove()
         this.competitionListBody.append(sportsman)
         arrow.src = this.redArrowSrc
      } else {
         sportsman.classList.remove('active')
         sportsman.remove()
         this.totalListBody.append(sportsman)
         arrow.src = this.greenArrowSrc
      }
   }

   render(containerSelector) {
      this.greenArrowSrc = './img/green.png'
      this.redArrowSrc = './img/red.png'

      //----------Загальний список----------------

      const totalList = document.createElement('div')
      totalList.className = 'total-list'

      const totalListTitle = document.createElement('h2')
      totalListTitle.innerHTML = 'Загальний список'
      totalList.append(totalListTitle)

      this.totalListBody = document.createElement('div')
      this.totalListBody.classList.add('total-list-body', 'list-body')
      totalList.append(this.totalListBody)
      this.addSportsman()

      //------------Змагання----------------------

      const competitionList = document.createElement('div')
      competitionList.className = 'competition-list'

      const competitionListTitle = document.createElement('h2')
      competitionListTitle.innerHTML = 'Обрані для змагання'
      competitionList.append(competitionListTitle)

      this.competitionListBody = document.createElement('div')
      this.competitionListBody.classList.add(
         'competition-list-body',
         'list-body'
      )
      competitionList.append(this.competitionListBody)

      //-------------Додаю списки------------------

      const targetElement = document.querySelector(containerSelector)
      targetElement.append(totalList)
      targetElement.append(competitionList)

      //------Навішую подію на кожен елемент-------

      const arrowsList = document.querySelectorAll('.arrow')
      const sportsmanList = document.querySelectorAll('.sportsman')
      console.log(arrowsList)

      for (let i = 0; i < this.sportsList.length; i++) {
         sportsmanList[i].onclick = this.manageSportsmanList.bind(
            this,
            sportsmanList[i],
            arrowsList[i]
         )
      }
   }
}

sportsList = [
   'John Depp',
   'Sara Wik',
   'Den Miro',
   'Alan Woo',
   'Olga Sich',
   'Ivan Hal',
]

window.onload = function () {
   const manager = new SportsManager(sportsList)
   manager.render('.container')
}
