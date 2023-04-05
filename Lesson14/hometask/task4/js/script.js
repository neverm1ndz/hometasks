// Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр
// кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які
// може видати банкомат, та метод зняття деякої суми.

class TBankomat {
   #banknoteList = {
      5: 0,
      10: 0,
      20: 0,
      50: 0,
      100: 0,
      200: 0,
   }
   constructor(
      banknote_5,
      banknote_10,
      banknote_20,
      banknote_50,
      banknote_100,
      banknote_200
   ) {
      this.Banknote_5 = banknote_5
      this.Banknote_10 = banknote_10
      this.Banknote_20 = banknote_20
      this.Banknote_50 = banknote_50
      this.Banknote_100 = banknote_100
      this.Banknote_200 = banknote_200
   }

   //--------------GET--------------

   get Banknote_5() {
      return this.#banknoteList[5]
   }
   get Banknote_10() {
      return this.#banknoteList[10]
   }
   get Banknote_20() {
      return this.#banknoteList[20]
   }
   get Banknote_50() {
      return this.#banknoteList[50]
   }
   get Banknote_100() {
      return this.#banknoteList[100]
   }
   get Banknote_200() {
      return this.#banknoteList[200]
   }

   //--------------SET--------------

   set Banknote_5(val) {
      if (val < 0) throw new Error('Incorrect value')
      this.#banknoteList[5] = val
   }
   set Banknote_10(val) {
      if (val < 0) throw new Error('Incorrect value')
      this.#banknoteList[10] = val
   }
   set Banknote_20(val) {
      if (val < 0) throw new Error('Incorrect value')
      this.#banknoteList[20] = val
   }
   set Banknote_50(val) {
      if (val < 0) throw new Error('Incorrect value')
      this.#banknoteList[50] = val
   }
   set Banknote_100(val) {
      if (val < 0) throw new Error('Incorrect value')
      this.#banknoteList[100] = val
   }
   set Banknote_200(val) {
      if (val < 0) throw new Error('Incorrect value')
      this.#banknoteList[200] = val
   }

   //--------------METHODS--------------

   get minSum() {
      for (const key in this.#banknoteList) {
         if (this.#banknoteList[key]) {
            return parseInt(key)
         }
      }
   }

   get maxSum() {
      return Object.keys(this.#banknoteList).reduce(
         (acc, el) => acc + parseInt(el) * this.#banknoteList[el],
         0
      )
   }

   getMoney(val) {
      if (val < this.minSum || val > this.maxSum)
         throw new Error('Incorrect value')
      let arr = Object.keys(this.#banknoteList).map(el => parseInt(el))
      let i = arr.length - 1
      do {
         if (val / arr[i] >= 1) {
            this.#banknoteList[arr[i]] -= Math.floor(val / arr[i])
            val = val % arr[i]
         }
         i--
      } while (val > 0 && i >= 0)

      if (val > 0)
         document.write(`
         Ваша решта - ${val}грн<br>
         На жаль, наш банкомат не видає купюри менше 5грн, але ви
         можете відправити ${val}грн на благодійність<br>
      `)
   }

   toString() {
      if (this.maxSum === 0) return `В банкоматі немає грошей<br>`
      return `
      Мінімальна сума для видачі - ${this.minSum}<br>
      Максимальна сума для видачі - ${this.maxSum}<br>
      `
   }
}

let tBankomat = new TBankomat(50, 45, 40, 35, 30, 25)
console.log(tBankomat)
console.log(tBankomat.maxSum)
tBankomat.getMoney(400)

// class TBankomat {
//    #bill_5
//    #bill_10
//    #bill_20
//    #bill_50
//    #bill_100
//    #bill_200
//    constructor(bill_5, bill_10, bill_20, bill_50, bill_100, bill_200) {
//       this.Bill_5 = bill_5
//       this.Bill_10 = bill_10
//       this.Bill_20 = bill_20
//       this.Bill_50 = bill_50
//       this.Bill_100 = bill_100
//       this.Bill_200 = bill_200
//    }

//    //-----------GET---------------
//    get Bill_5() {
//       return this.#bill_5
//    }
//    get Bill_10() {
//       return this.#bill_10
//    }
//    get Bill_20() {
//       return this.#bill_20
//    }
//    get Bill_50() {
//       return this.#bill_50
//    }
//    get Bill_100() {
//       return this.#bill_100
//    }
//    get Bill_200() {
//       return this.#bill_200
//    }

//    get maxSum() {
//       return (
//          this.Bill_5 * 5 +
//          this.Bill_10 * 10 +
//          this.Bill_20 * 20 +
//          this.Bill_50 * 50 +
//          this.Bill_100 * 100 +
//          this.Bill_200 * 200
//       )
//    }

//    get minSum() {
//       if (this.Bill_5) return 5
//       else if (this.Bill_10) return 10
//       else if (this.Bill_20) return 20
//       else if (this.Bill_50) return 50
//       else if (this.Bill_100) return 100
//       else if (this.Bill_200) return 200
//       else return 0
//    }

//    //-----------SET---------------
//    set Bill_5(val) {
//       if (val < 0) throw new Error('Incorrect value')
//       this.#bill_5 = val
//    }
//    set Bill_10(val) {
//       if (val < 0) throw new Error('Incorrect value')
//       this.#bill_10 = val
//    }
//    set Bill_20(val) {
//       if (val < 0) throw new Error('Incorrect value')
//       this.#bill_20 = val
//    }
//    set Bill_50(val) {
//       if (val < 0) throw new Error('Incorrect value')
//       this.#bill_50 = val
//    }
//    set Bill_100(val) {
//       if (val < 0) throw new Error('Incorrect value')
//       this.#bill_100 = val
//    }
//    set Bill_200(val) {
//       if (val < 0) throw new Error('Incorrect value')
//       this.#bill_200 = val
//    }

//    //-----------METHODS---------------

//    getMoney(val) {
//       if (val > this.maxSum || val < this.minSum) {
//          throw new Error('Incorrect value')
//       }
//       if (this.Bill_200 !== 0 && val / 200 >= 1) {
//          this.Bill_200 -= Math.floor(val / 200)
//          val = val % 200
//       }
//       if (this.Bill_100 !== 0 && val / 100 >= 1) {
//          this.Bill_100 -= Math.floor(val / 100)
//          val = val % 100
//       }
//       if (this.Bill_50 !== 0 && val / 50 >= 1) {
//          this.Bill_50 -= Math.floor(val / 50)
//          val = val % 50
//       }
//       if (this.Bill_20 !== 0 && val / 20 >= 1) {
//          this.Bill_20 -= Math.floor(val / 20)
//          val = val % 20
//       }
//       if (this.Bill_10 !== 0 && val / 10 >= 1) {
//          this.Bill_10 -= Math.floor(val / 10)
//          val = val % 10
//       }
//       if (this.Bill_5 !== 0 && val / 5 >= 1) {
//          this.Bill_5 -= Math.floor(val / 5)
//          val = val % 5
//       }
//       if (val > 0)
//          document.write(`
//    Ваша решта - ${val}грн<br>
//    На жаль, наш банкомат не видає купюри менше 5грн, але ви
//    можете відправити ${val}грн на благодійність<br>
//    `)
//    }

//    toString() {
//       if (this.maxSum === 0) return `В банкоматі немає грошей<br>`
//       return `
//       Мінімальна сума для видачі - ${this.minSum}<br>
//       Максимальна сума для видачі - ${this.maxSum}<br>
//       `
//    }
// }
