// Особиста бібліотека. Картотека домашньої бібліотеки: дані книги (автори (піб, рік народження, короткий
// опис), назва книги, жанр, видавництво (назва, реєстраційний номер, рік засування)). Реалізувати розділи
// бібліотеки (спеціальна література, хобі, домашнє господарство і т.д.), походження книги і наявність на даний
// час. Організувати додавання/вилучення книг та вибір книг за назвою, за ПІБ автора, за видавництвом.

// Автор
class Author {
   constructor({ surname, firstName, fathersName, authorBirthdayYear, descr }) {
      this.surname = surname
      this.firstName = firstName
      this.fathersName = fathersName
      this.authorBirthdayYear = authorBirthdayYear
      this.descr = descr
   }
   getFullName() {
      return this.surname + ' ' + this.firstName + ' ' + this.fathersName
   }
   toString() {
      return `
      ${this.surname} ${this.firstName} ${this.fathersName}<br>
      ${this.authorBirthdayYear}<br>
      ${this.descr}
      `
   }
}

// Видання
class Publication {
   constructor({ pubTitle, pubYear }) {
      this.pubTitle = pubTitle
      this.pubYear = pubYear
      this.regNumber = new Date().getTime()
   }
   toString() {
      return `Видавництво: ${this.pubTitle} - Рік заснування: ${this.pubYear} - Реєстраційний номер: ${this.regNumber}<br>`
   }
}

// Книга
class Book {
   constructor(initData) {
      this.author = new Author(initData)
      this.title = initData.title
      this.genre = initData.genre
      this.publication = new Publication(initData)
      this.origin = initData.origin
   }
   toString() {
      return `
      ${this.title}<br>
      ${this.genre}<br>
      ${this.author}<br>
      ${this.publication}<br>
      `
   }
}

// Розділи бібліотеки
class LibrarySection {
   constructor(title) {
      this.title = title
      this.books = []
   }
   addBook(book) {
      this.books.push(book)
   }
   removeBook(book) {
      this.books = this.books.filter(el => el !== book)
   }
   toString() {
      return `${this.title}<br> ${this.books}`
   }
}

// Бібліотека
class Library {
   constructor(librarySections) {
      this.librarySections = librarySections
      this.booksList = []
   }

   // Додавання книги
   addBook(newBook) {
      let librarySectionsKeys = Object.keys(this.librarySections)
      const selectedSections = prompt(
         `Виберіть через кому номери розділів для книги \"${newBook.title}\":\n 1. Спеціальна література\n 2. Хобі\n 3. Шкільна література\n 4. Научна література`
      )
         .split(',')
         .map(el => parseInt(el) - 1)
      for (const index of selectedSections) {
         const section = librarySectionsKeys[index]
         this.librarySections[section].addBook(newBook)
      }
      this.booksList.push(newBook)
   }

   // Вилучення книги (за назвою)
   removeBook(bookTitle) {
      this.booksList = this.booksList.filter(el => el.title !== bookTitle)
      for (const section in this.librarySections) {
         this.librarySections[section].books = this.librarySections[
            section
         ].books.filter(el => el.title !== bookTitle)
      }
   }

   // Походження книги
   getBookOrigin(bookTitle) {
      let book = this.booksList.find(el => el.title === bookTitle)
      console.log(book.origin)
   }

   // Наявність книги в бібліотеці
   isBookInLibrary(title) {
      if (this.booksList.find(el => el.title === title)) return true
      return false
   }

   // Пошук за назвою
   getBooksByTitle(title) {
      return this.booksList.find(el => el.title === title)
   }

   // Пошук за ПІБ автора
   getBooksByAuthor(val) {
      for (const book of this.booksList) {
         if (book.author.getFullName() === val) console.log(book)
      }
   }

   // Пошук за назвою видавництва
   getBooksByPublication(val) {
      for (const book of this.booksList) {
         if (book.publication.pubTitle === val) console.log(book)
      }
   }

   // Виведення на екран розділів бібліотеки
   printSections() {
      for (const key in this.librarySections) {
         document.write(this.librarySections[key])
      }
   }

   toString() {
      return `${this.booksList}<br>`
   }
}

// Об'єкт розділів бібліотеки
let librarySections = {
   speciaLiterature: new LibrarySection('Спеціальна література'),
   hobby: new LibrarySection('Хобі'),
   schoolLiterature: new LibrarySection('Шкільна література'),
   scientificLiterature: new LibrarySection('Научна література'),
}

let library = new Library(librarySections)

library.addBook(
   new Book({
      surname: 'Ковач',
      firstName: 'Іван',
      fathersName: 'Петрович',
      authorBirthdayYear: 1970,
      descr: 'Відомий український автор детективів',
      title: 'Хороший детектив',
      genre: 'Детектив',
      pubTitle: 'Абабагаламага',
      pubYear: 2000,
      origin: 'Куплена',
   })
)
library.addBook(
   new Book({
      surname: 'Юрик',
      firstName: 'Лариса',
      fathersName: 'Петрівна',
      authorBirthdayYear: 1980,
      descr: 'Вчитель української мови та літератури',
      title: 'Українська література',
      genre: 'Шкільний підручник',
      pubTitle: 'Підручники і посібники',
      pubYear: 2005,
      origin: 'Подарована',
   })
)
library.addBook(
   new Book({
      surname: 'Бачкай',
      firstName: 'Олександр',
      fathersName: 'Георгійович',
      authorBirthdayYear: 1966,
      descr: 'Заслужений вчитель фізики',
      title: 'Фізика для 11 класу',
      genre: 'Шкільний підручник',
      pubTitle: 'Підручники і посібники',
      pubYear: 2010,
      origin: 'Куплена',
   })
)
library.addBook(
   new Book({
      surname: 'Дронь',
      firstName: 'Микола',
      fathersName: 'Федорович',
      authorBirthdayYear: 1946,
      descr: 'Видатний програміст',
      title: 'Основи програмування',
      genre: 'Наука',
      pubTitle: 'Фоліо',
      pubYear: 2013,
      origin: 'Подарована',
   })
)
library.addBook(
   new Book({
      surname: 'Хокінг',
      firstName: 'Стівен',
      fathersName: 'Васильович',
      authorBirthdayYear: 1942,
      descr: 'Англійський фізик-теоретик',
      title: 'Пізнаємо всесвіт',
      genre: 'Наука',
      pubTitle: 'Фоліо',
      pubYear: 2001,
      origin: 'Подарована',
   })
)

// library.removeBook('Хороший детектив')
// library.getBookOrigin('Пізнаємо всесвіт')
library.getBooksByPublication('Підручники і посібники')
console.log(library)
document.write(library)
library.printSections()
