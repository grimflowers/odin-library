let myLibrary = [];

function Book(name, author, pages, read) {
    this.name   = name;
    this.author = author;
    this.pages  = pages;
    this.read   = read;
}

function createBook() {
    let form   = document.querySelector('.book-form');
    let name   = form.querySelector('#name').textContent;
    let author = form.querySelector('#author').textContent;
    let pages  = form.querySelector('#pages').textContent;
    let read   = form.querySelector('#read').textContent;

    myLibrary.push(new Book(name, author, pages, read));
    form.classList.toggle('.visible');
    form.reset();
}

let cancelBtn = document.querySelector('.cancel-book');
cancelBtn.addEventListener('click', function() {
    let overlay = document.querySelector('.overlay');
    overlay.classList.toggle('visible');
});

let addBook = document.querySelector('.add-book');
addBook.addEventListener('click', function(e) {
    let overlay = document.querySelector('.overlay');
    overlay.classList.toggle('visible');
});