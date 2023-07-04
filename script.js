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

function openForm() {
    document.getElementById("bookForm").style.display = "block";
}

function closeForm() {
    document.getElementById("bookForm").style.display = "none";
}


const container = document.querySelector(".container");

for (let i = 0; i < myLibrary.length; i++) {
    //create card element
    const card = document.createElement("div");
    card.className = "card";
    const imageContainer = document.createElement("div");
    imageContainer.className = "imgContainer";
    //select bookObject from array
    let bookObject = myLibrary[i];
    //create cardImage element
    const cardImage = document.createElement("img");
    cardImage.src = bookObject.img_path;
    //create section for book title
    const bookTitle = document.createElement("h4");
    bookTitle.textContent = bookObject.title;
    //create p tag for book author
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = "by " + bookObject.author;
    container.appendChild(card);
    imageContainer.appendChild(cardImage);
    card.appendChild(imageContainer);
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
}


