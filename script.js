let myLibrary = [
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "img_path": "images/harryPotterAndTheSorcerersStone.jpg",
        "pages": 462,
        "read": "false",
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "img_path": "images/1984.png",
        "pages": 221,
        "read": "true",
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "img_path": "images/braveNewWorld.jpg",
        "pages": 203,
        "read": "false",
    },
    {
        "title": "Grapes of Wrath",
        "author": "John Steinbeck",
        "img_path": "images/grapesOfWrath.jpg",
        "pages": 266,
        "read": "true",
    },
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

const container = document.querySelector(".container");

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    container.textContent = '';
    myLibrary.push(book);
    showBooks();
};

function removeAllChildNodes(parent) {
//used to clear books from container before showing updated library.
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function changeReadStatus(bookObject, beenRead, readBtn, myLibrary) {
    const index = myLibrary.map(bookObject => bookObject.title).indexOf(bookObject.title);
    if (index > -1) {
        if (bookObject.read == 'false') {
            bookObject.read = 'true';
            beenRead.className = "beenRead-true";
            beenRead.textContent = "Read";
            readBtn.textContent = "mark as unread";
            myLibrary[index].read = 'true'
            removeAllChildNodes(container);
            showBooks();
        }
        else {
            bookObject.read = 'false';
            beenRead.className = "beenRead-false";
            beenRead.textContent = "Not Read";
            readBtn.textContent = "mark as read";
            myLibrary[index].read = 'false';
            removeAllChildNodes(container);
            showBooks();
        }
    }
    else console.log("book does not exist: index = " + index);
};

function removeBook(bookObject, myLibrary) {
    const index = myLibrary.map(bookObject => bookObject.title).indexOf(bookObject.title);
    if (index > -1) {
        myLibrary.splice(index, 1);
        removeAllChildNodes(container);
        showBooks();
    }
    //book doesnt exist in myLibrary
    else console.log("index: " + index);
}

function createCard(index) {
    //create card element
    const card = document.createElement("div");
    card.className = "card";
    const imageContainer = document.createElement("div");
    imageContainer.className = "imgContainer";
    //select bookObject from array
    let bookObject = myLibrary[index];
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
    if (bookObject.read == "false") {
        beenRead.textContent = "Not Read";
        beenRead.id = "details";
        beenRead.className = "beenRead-false"
    }
    else {
        beenRead.textContent = "Read";
        beenRead.id = "details";
        beenRead.className = "beenRead-true"
    }
    const readBtn = document.createElement("button");
    if (bookObject.read == "false") {
        readBtn.textContent = "mark as read";
    }
    else readBtn.textContent = "mark as unread";
    readBtn.addEventListener("click", (e) => {
        changeReadStatus(bookObject, beenRead, readBtn, myLibrary);
    });
    const removeButton = document.createElement("button");
    removeButton.textContent = 'remove';
    removeButton.addEventListener("click", (e) => {
        removeBook(bookObject, myLibrary);
    });

    //appending each component to create card
    container.appendChild(card);
    imageContainer.appendChild(cardImage);
    card.appendChild(imageContainer);
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(beenRead);
    card.appendChild(readBtn);
    card.appendChild(removeButton);
}


function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        createCard(i);
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


