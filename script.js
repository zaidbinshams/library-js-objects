const library = [];
const body = document.querySelector("body");
const display = document.querySelector("button.display");
const addNew = document.querySelector("button.add-new");
const readStat = document.querySelector("button.read");
const remove = document.querySelector("button.remove");
const main = document.querySelector(".main");
const landing = document.querySelector(".landing");
const bookList = document.querySelector(".book-list");
const newForm = document.querySelector(".new-form");

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

addBook("test book 1", "test author 1");
addBook("test book 2", "test author 2");
addBook("test book 1", "test author 1");
addBook("test book 2", "test author 2");
addBook("test book 1", "test author 1");
addBook("test book 2", "test author 2");
addBook("test book 1", "test author 1");
addBook("test book 2", "test author 2");
addBook("test book 1", "test author 1");
addBook("test book 2", "test author 2");
addBook("test book 1", "test author 1");
addBook("test book 2", "test author 2");
addBook("test book 1", "test author 1");
addBook("test book 2", "test author 2");

function backButton(place) {
    const back = document.createElement("button");
    back.textContent = "Go Home";
    back.style.backgroundColor = "rgb(40, 50, 20)";
    place.appendChild(back);
    back.onclick = (e) => {
        e.preventDefault();
        landing.style.display = "flex";
        newForm.style.display = "none";
        bookList.style.display = "none";
        place.removeChild(back);
    }
}

function displayBooks() {
    landing.style.display = "none";
    newForm.style.display = "none";
    bookList.style.display = "flex";
    bookList.replaceChildren();
    if (library.length === 0) {
        const bookCard = document.createElement("div");
        bookCard.textContent = "Your library is currently empty.";
        bookCard.style.color = "white";
        bookCard.style.justifyContent = "center";
        bookCard.style.alignItems = "center";
        bookCard.style.fontFamily = "Rubik, sans-serif";
        bookCard.style.fontWeight = "bold";
        bookCard.style.fontSize = "large";
        bookList.appendChild(bookCard);
    } else {
        for (let i = 0; i < library.length; i++) {
            const bookCard = document.createElement("div");
            bookCard.innerHTML = `<strong>Book ID: ${library[i].id}</strong><br>${library[i].title} by ${library[i].author}<br>(read: ${library[i].readStat})`;
            bookCard.style.color = "rgb(40, 50, 20)";
            bookCard.style.justifyContent = "center";
            bookCard.style.alignItems = "center";
            bookCard.style.fontFamily = "Rubik, sans-serif";
            bookCard.style.border = "2px solid black";
            bookCard.style.borderRadius = "8px";
            bookCard.style.padding = "0.5rem 0.8rem";
            bookCard.style.minHeight = "fit-content";
            bookCard.style.backgroundColor = "rgb(150, 190, 60)";
            bookList.appendChild(bookCard);
        }
    }
    backButton(main);
}

function inputForm() {
    landing.style.display = "none";
    bookList.style.display = "none";
    newForm.style.display = "flex";
    // store the value of all input fields into variables and then pass them as arguments to the addBook() function
    backButton(newForm);
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