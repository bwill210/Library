let myLibrary = [
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "img_path": "images/harryPotterAndTheSorcerersStone.jpg",
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "img_path": "images/1984.png",
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "img_path": "images/braveNewWorld.jpg",
    },
    {
        "title": "Grapes of Wrath",
        "author": "John Steinbeck",
        "img_path": "images/grapesOfWrath.jpg",
    },
];

function Book(title, author, img_path) {
    this.title = title;
    this.author = author;
    this.img_path = img_path;
}

function Book (title, author) {
    this.title = title;
    this.author = author;
    this.img_path = '';
}

function addBookToLibrary() {
    let promptedTitle = "New Book Title";//prompt("what is the title?");
    let promptedAuthor = "Author";//prompt("Who is the author?");
    let book = new Book(promptedTitle, promptedAuthor);
    myLibrary.push(book);
}

addBookToLibrary();

const container = document.querySelector(".container");

for (let i = 0; i < myLibrary.length; i++) {
    //create card element
    const card = document.createElement("div");
    card.className = "card";
    //select bookObject from array
    let bookObject = myLibrary[i];
    //create cardImage element
    const cardImage = document.createElement("img");
    cardImage.src = bookObject.img_path;
    //create h2 for book title
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = bookObject.title;
    //create p tag for book author
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = "by " + bookObject.author;
    container.appendChild(card);
    card.appendChild(cardImage);
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
}


