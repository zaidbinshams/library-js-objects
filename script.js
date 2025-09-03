const library = [];
const body = document.querySelector("body");
const display = document.querySelector("button.display");
const addNew = document.querySelector("button.add-new");
const readStat = document.querySelector("button.read");
const remove = document.querySelector("button.remove");

function Book(id, title, author, readStat) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.readStat = readStat;
}

function addBook(title, author) {
    let id = crypto.randomUUID();
    let readStat = false;
    let newBook = new Book(id, title, author, readStat);
    library.push(newBook);
}

function displayBooks() {
    for (let i = 0; i < library.length; i++) {
        console.log(library[i]);
    }
}

function inputForm() {
    // figure out how to display the form and send the data back to the library array
}

function readStatus() {
    // figure out how to change the readStat property of the instance of the Book object
}

function removeBook() {
    // figure out how to remove the corresponding book from the library array
}

display.addEventListener("click", displayBooks);
addNew.addEventListener("click", inputForm);
readStat.addEventListener("click", readStatus);
remove.addEventListener("click", removeBook)