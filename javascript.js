const table = document.getElementById("table");
const container = document.querySelector("container");
const form = document.getElementById("book-form");
const newBookButton = document.getElementById("new-book");
const submitButton = document.getElementById("submit")
let bookId = 0;

const myLibrary = [];

function Book(title, author, pages, read, bookId){
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
   this.bookId = bookId;
};

Book.prototype.info = function() {
   return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
}

function addBookToLibrary(){

   let titleInput = document.getElementById("title-input").value;
   let authorInput = document.getElementById("author-input").value;
   let pagesInput = document.getElementById("pages-input").value;
   let checkboxInput= document.getElementById("checkbox-input").checked;

   let newBook = Object.create(Book)
   newBook.title = titleInput;
   newBook.author = authorInput;
   newBook.pages = pagesInput;
   newBook.read = checkboxInput;
   newBook.id = ++bookId;
   myLibrary.push(newBook);

   event.preventDefault();
   populateTable();
   form.classList.remove("enabled")
}

function populateTable(){
   table.innerHTML='';
   createTableHeaders();
      
myLibrary.forEach(book => {
      let tr = document.createElement("tr");
      tr.setAttribute("id",book.bookId);
   
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
      let newCheckBox = document.createElement("input");
      newCheckBox.type = "checkbox";
      newCheckBox.checked = book.read;
      td4.appendChild(newCheckBox);
      tr.appendChild(td4);
      
      let td5 = document.createElement("td");
      let btn = document.createElement("input")
      btn.setAttribute("type","button");
      btn.setAttribute("value","X");
      btn.setAttribute("onclick","deleteRow(this, bookId)")
      td5.appendChild(btn)
      tr.appendChild(td5);
   
      table.appendChild(tr);
});
}



function deleteRow(row, bookId) {
   let i = row.parentNode.parentNode.rowIndex;
   document.getElementById("table").deleteRow(i);
   removeBookFromArray(myLibrary,bookId-1);
}

function removeBookFromArray(arr, id) {
   const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
 
   if (objWithIdIndex > -1) {
     arr.splice(objWithIdIndex, 1);
   }
 
   return arr;
 }


function createTableHeaders(){
   
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
const th5 = document.createElement("th");
th5.textContent = "Delete";
tableHeaders.appendChild(th5);
table.appendChild(tableHeaders);
}

newBookButton.addEventListener("click",()=>{
   form.classList.toggle("enabled");
   form.reset();
})

submitButton.addEventListener("click",addBookToLibrary);




