let myLibrary = [
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "img_path": "images/harryPotterAndTheSorcerersStone.jpg",
        "pages": 462,
        "hasBeenRead": "false",
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "img_path": "images/1984.png",
        "pages": 221,
        "hasBeenRead": "true",
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "img_path": "images/braveNewWorld.jpg",
        "pages": 203,
        "hasBeenRead": "true",
    },
    {
        "title": "Grapes of Wrath",
        "author": "John Steinbeck",
        "img_path": "images/grapesOfWrath.jpg",
        "pages": 266,
        "hasBeenRead": "true",
    },
];

function Book(title, author, img_path) {
    this.title = title;
    this.author = author;
    this.img_path = img_path;
}

function Book (title, author, pages, hasBeenRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasBeenRead = hasBeenRead;
    this.img_path = '';
}

function addBookToLibrary(title, author, pages, hasBeenRead) {
    let book = new Book(title, author, pages, hasBeenRead);
    container.textContent = '';
    myLibrary.push(book);
    showBooks();
};

const container = document.querySelector(".container");

function showBooks() {
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
        bookTitle.id = "title";
        //create p tag for book author
        const bookAuthor = document.createElement("div");
        bookAuthor.id = "details";
        bookAuthor.textContent = "by " + bookObject.author;
        //pages in book
        const bookPages = document.createElement("div");
        bookPages.id = "details";
        bookPages.textContent = "Pages: " + bookObject.pages;
        //has been read?
        const beenRead = document.createElement("h4");
        if (bookObject.hasBeenRead == "true") {
            beenRead.textContent = "Not Read";
            beenRead.id = "details";
            beenRead.className = "beenRead-false"
        }
        else {
            beenRead.textContent = "Read";
            beenRead.id = "details";
            beenRead.className = "beenRead-true"
        }
        container.appendChild(card);
        imageContainer.appendChild(cardImage);
        card.appendChild(imageContainer);
        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(beenRead);
    };
};

//form stuff

function openForm() {
    document.getElementById("bookForm").style.display = "block";
};

function closeForm() {
    document.getElementById("bookForm").style.display = "none";
};

const addBookForm = document.getElementById('addBook-form');

addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    let hasBeenRead = document.getElementById('hasBeenRead');
    if (title.value == "" || author.value == "" || pages.value == "") {
        alert("Must enter all fields");
    }
    addBookToLibrary(title.value, author.value, pages.value, hasBeenRead.value);
    title.value = '';
    author.value = '';
    pages.value = '';
    hasBeenRead.value = '';
});

showBooks();


