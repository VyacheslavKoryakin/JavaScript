class LibraryItem {
    
    constructor(author, title, year) {
        this.author = author;
        this.title = title;
        this.year = year;
    }
    itemInfo(){
        throw new Error("");
    }

}


class Book extends LibraryItem {
    
    
    constructor(author, title, year, info) {
      
        super(author, title, year) 
        this.info = info;

    }

    itemInfo(){
        console.log(`Информация о книге: автор: ${this.author}, название: "${this.title}", год выпуска: ${this.year}, краткое содержание: ${this.info}`);
        
    }
}
class Jornal extends LibraryItem {
    
    
    constructor(author, title, year,  article ,info) {
      
        super(author, title, year) 
        this.article= article;
        this.info = info;

    }

    itemInfo(){
        console.log(`Информация о журнале: название: "${this.title}" ,год выпуска: ${this.year}, автор: ${this.author}, название статьи: ${this.article}, краткое содержание: ${this.info}`);
        
    }
}



const book = new Book("Д. Роалинг", "Гарри Поттер", 2000, " Книга о юном волшебнике...");
console.log(book.itemInfo());


const jornal = new Jornal("Э. Смирнов ","Юный техник" , 1987,"Радио-приемник своими руками"," Статья о том, как можно собрать ....");
console.log(jornal.itemInfo());
