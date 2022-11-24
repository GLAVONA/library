const table = document.getElementById("table");
const container = document.querySelector("container");
const form = document.getElementById("book-form");
const newBookButton = document.getElementById("new-book");


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


addBookToLibrary("zcxczx","fzxzvx","123","gkmkmgfa");
addBookToLibrary("mfnkmfa","fzxzvx","123","gkmkmgfa");
addBookToLibrary("amsfmkla","fzxzvx","123","gkmkmgfa");
addBookToLibrary("as kdmkma","fzxzvx","123","gkmkmgfa");


const tableHeaders = document.createElement("tr");
const th1 = document.createElement("th");
th1.textContent = "Title";
tableHeaders.appendChild(th1);
const th2 = document.createElement("th");
th2.textContent = "Author";
tableHeaders.appendChild(th2);
const th3 = document.createElement("th");
th3.textContent = "Pages";
tableHeaders.appendChild(th3);
const th4 = document.createElement("th");
th4.textContent = "Read";
tableHeaders.appendChild(th4);

table.appendChild(tableHeaders);


for(let book of myLibrary){
   let tr = document.createElement("tr");

   let td1 = document.createElement("td");
   td1.textContent = book.title;
   tr.appendChild(td1);
   
   let td2 = document.createElement("td");
   td2.textContent = book.author;
   tr.appendChild(td2);
   
   let td3 = document.createElement("td");
   td3.textContent = book.pages;
   tr.appendChild(td3);
   
   let td4 = document.createElement("td");
   td4.textContent = book.read;
   tr.appendChild(td4);

   table.appendChild(tr);
}

newBookButton.addEventListener("click",()=>{
   form.classList.add("enabled")
})
