
const lib = {
    books: [],
    abbBook: function (title, author) {
        this.books.push({ title, author })
    },
    getBooks: function (params) {
        for (let index = 0; index < this.books.length; index++) {
            const element = this.books[index];
            console.log(`index books ${index}  book ${element.title}, ${element.author}`)

        }
    },
    //1
    getBookInfo: function (params) {
        let bookInfo;
        if (this.books[params - 1])
            bookInfo = this.books[params - 1];
        console.log(`${bookInfo.title} ${bookInfo.author}`)
    },
    //2
    clearBooks: function () {

        for (let index = 0; index <= this.books.length; index++) {
            this.books.pop(this.books[index]);

        }


    },
    //3
    addMoreBooks: function (params) {
        console.log(params)
        for (let index = 0; index < params.length; index++) {
            this.abbBook(params[index], params[index + 1])
            console.log(this.books)
            index++;
        }

    },
    //4
    getLastBook: function () {
        console.log(this.books[this.books.length - 1])
    },

    getFirstBook: function () {
        console.log(this.books[0])
    },
    //5
    getAuthors: function () {
        element = []
        for (let index = 0; index < this.books.length; index++) {
            if (!element.includes(this.books[index].author))
                element.push(this.books[index].author);

        }
        console.log(element)
        return element

    },
    //6
    getBookTitle: function () {
        let bookTitileArr = []
        for (let index = 0; index < this.books.length; index++) {
            bookTitileArr.push(this.books[index].title);
        }
        console.log(bookTitileArr);
    },
    //7
    countBookOfAuthor: function () {
        let authors = this.getAuthors();
        let element = Array(authors.length);
        element.fill(0)

        for (let i = 0; i < this.books.length; i++) {

            let indexNumber = authors.findIndex(a => { return a == this.books[i].author })
            element[indexNumber] += 1;
        }

        for (let index = 0; index < authors.length; index++) {
        console.log(`Автор ${authors[index]} имеет ${element[index]} произведений`)
        }
    }

}





lib.abbBook("Lord of the rings", "J.Tolkien");
lib.abbBook("1984", "G. Orwell");

lib.getBooks();

lib.getBookInfo(1);

lib.clearBooks();

let newBooks = ["Колобок", "Нородная", "Теремок", "Нородная", "Золотая рыбка", "А.С. Пушкин"]

lib.addMoreBooks(newBooks);

lib.getLastBook();
lib.getFirstBook();
lib.getAuthors();
lib.getBookTitle();
lib.countBookOfAuthor();
