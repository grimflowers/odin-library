let myLibrary = [];

function Book(name, author, pages, read) {
    this.name   = name;
    this.author = author;
    this.pages  = pages;
    this.read   = read;
}

function createBook() {
    let overlay = document.querySelector('.overlay');
    let form    = document.querySelector('.book-form');
    let name    = form.querySelector('#name').value;
    let author  = form.querySelector('#author').value;
    let pages   = form.querySelector('#pages').value;
    let read    = form.querySelector('#read').checked;

    myLibrary.push(new Book(name, author, pages, read));

    overlay.classList.toggle('visible');
    resetBookForm();
    reloadLibrary();
}

function createRemoveBtn() {
    let btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = "Remove";
    btn.addEventListener('click', removeBook);

    return btn;
}

function removeBook(e) {
    let bookTitle = e.target.parentElement.firstChild.textContent
    myLibrary = myLibrary.filter(x => x.name !== bookTitle);
    reloadLibrary();
}

function createLibraryCard(book) {
    let newCard = document.createElement('div');
    for (property in book) {
        let newParagraph = document.createElement('p');
        newParagraph.innerText = book[property];
        newCard.appendChild(newParagraph);
    }
    
    newCard.appendChild(createRemoveBtn());
    newCard.classList.add('book-card');

    return newCard;
}

function reloadLibrary() {
    let libraryDiv = document.querySelector('.library');
    libraryDiv.innerHTML = '';

    for (book of myLibrary) {
        libraryDiv.appendChild(createLibraryCard(book));
    }
}

function resetBookForm() {
    let form = document.querySelector('.book-form');
    form.reset();
}

let cancelBtn = document.querySelector('.cancel-book');
cancelBtn.addEventListener('click', function() {
    let overlay = document.querySelector('.overlay');
    resetBookForm();
    overlay.classList.toggle('visible');
});

let addBookBtn = document.querySelector('.add-book');
addBookBtn.addEventListener('click', function(e) {
    let overlay = document.querySelector('.overlay');
    overlay.classList.toggle('visible');
});

let creatBookBtn = document.querySelector('.create-book');
creatBookBtn.addEventListener('click', createBook);