let myLibrary = [];

function Book(title, author, pages, read){
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
   function info(){
    return `${title} by ${author}, ${pages}, ${read}`
   }
};

function addBookToLibrary(title, author, pages, read){
   let newBook = Object.create(Book)
   newBook.title = title;
   newBook.author = author;
   newBook.pages = pages;
   newBook.read = read;

   myLibrary.push(newBook);
}

const table = document.createElement("table")

