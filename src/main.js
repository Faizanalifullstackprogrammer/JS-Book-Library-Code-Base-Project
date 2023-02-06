const addBook = document.querySelector('.addbook');
const mainDiv = document.querySelector('.main-div');
const booksContainer = document.querySelector('.display-book');
const displayBooks = document.querySelector('.display-books');
const submit = document.querySelector('.submit');
const bookName = document.getElementById('bookName');
const bookAuthor = document.getElementById('bookAuthor');
const pagesNumber = document.getElementById('pagesNumber');
const statusRead = document.getElementById('status');
const errorMessage = document.querySelector('.errormessage');
const cancelForm = document.querySelector('.cancel');

const mBooks = [{
  name: 'Harry potter', author: 'Jk Rowling', pages: 301, status: 'Done!',
}];

function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addTheBook() {
  const name = bookName.value;
  const author = bookAuthor.value;
  const pages = pagesNumber.value;
  const status = statusRead.value;
  const book = new Book(name, author, pages, status);
  mBooks.push(book);
}

function toggleStatus(status) {
  if (status.target.classList.contains('status')) {
    if (status.target.textContent === 'Done!') {
      status.target.textContent = 'Not yet!';
    } else {
      status.target.textContent = 'Done!';
    }
  }
}

cancelForm.addEventListener('click', () => {
  mainDiv.classList.remove('show');
  displayBooks.classList.remove('x');
});

addBook.addEventListener('click', () => {
  mainDiv.classList.add('show');
  displayBooks.classList.add('x');
});

function booksDispaly() {
  booksContainer.innerHTML = '';
  mBooks.forEach((a, index) => {
    const card = document.createElement('div');
    card.className = 'col-4 text-center';
    card.innerHTML = `<div class="card text-dark bg-white mb-3 p-3" >
        <p class="form-control d-flex justify-content-between"><p class="bg-info px-2 py-1 text-white">${index + 1}</p><a href="#" class="delete text-danger" onclick="deleteBook(${index})" >X</a></p>
        <p class="form-control text-white bg-info"> Book Name: ${a.name}</p>
        <p class="form-control text-white bg-info">Author Name: ${a.author}</p>
        <p class="form-control text-white bg-info">Number of pages: ${a.pages}</p>
        <p class="form-control text-white bg-info"><a href="#" class="btn-warning px-2 py-1 rounded status">${a.status}</a></p>
      </div>`;
    booksContainer.appendChild(card);
  });
}
function clearfield() {
  bookName.value = '';
  bookAuthor.value = '';
  pagesNumber.value = '';
}

window.addEventListener('DOMContentLoaded', booksDispaly);

booksContainer.addEventListener('click', toggleStatus);

submit.addEventListener('click', (b) => {
  b.preventDefault();
  if (bookName.value === '' || bookAuthor.value === '' || pagesNumber.value === '') {
    errorMessage.classList.add('show');
    setTimeout(() => errorMessage.classList.remove('show'), 3000);
  } else {
    addTheBook();
    clearfield();
    booksDispaly();
    mainDiv.classList.remove('show');
    displayBooks.classList.remove('x');
  }
});

/* eslint-disable no-unused-vars */

function deleteBook(index) {
  mBooks.splice(index, 1);
  booksDispaly();
}
/* eslint-enable no-unused-vars */