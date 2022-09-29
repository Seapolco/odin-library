
// TO-DO - make form pop up

// Delete book DONE

// FIRESHIP IO TUT ON ANIMATED FROM SIDE EFFECT ON SCROOLL



console.log('Hello, World!');

let myLibrary = [];

let container = document.querySelectorAll('.container');

let bookDisplay = document.querySelector('.bookDisplay');

let titleInput = document.querySelector('#titleInput');
let authorInput = document.querySelector('#authorInput');
let pagesInput = document.querySelector('#pagesInput');
let readSelect = document.querySelector('#readSelect');
let addButton = document.querySelector('#addBook');

// let bookCard = document.createElement('div');
// let titleDiv = document.createElement('div');
// let authorDiv = document.createElement('div');
// let pagesDiv = document.createElement('div');
// let readDiv = document.createElement('div');

let gif = document.querySelector('.gif');



function Book(title,author,pages,read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.changeReadStatus = (status) =>{
    this.read = status;
  }
}

function changeImageCleverer() {
  gif.setAttribute('class', 'gif');
  gif.style.backgroundImage = "url('./images/cleverer.webp')";
}

function changeImageBook() {
  gif.setAttribute('class', 'gif');
  gif.style.backgroundImage = "url('./images/bookGif.webp')";
}

function switcher() {
  changeImageCleverer();
  setTimeout(changeImageBook, 3500)
}



addButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(myLibrary.length)
  console.log('added');
  let newBook = new Book(titleInput.value,`by ${authorInput.value}`,`${pagesInput.value}   pages`,readSelect.value );
  myLibrary.push(newBook);
  // addBookToLibrary(newBook);
  updateLibrary();
  console.log(myLibrary)
  resetInputs([titleInput,authorInput,pagesInput,readSelect]);
  switcher();
})

let mrPye = new Book('Mr Pye', 'by   Mervyn Peake', "278 pages", 'Finished');

// let dreamside = new Book('Dreamside', 'by Graham Joyce', '248 pages', 'Finished' )

myLibrary.push(mrPye);
// addBookToLibrary(mrPye);

function displayMyLibrary(library) {
  library.forEach((book) => {
    addBookToLibrary(book);
  })
}

function updateLibrary() {
  addBookToLibrary(myLibrary[myLibrary.length -1]);
}

function deleteLibrary() {
  while (bookDisplay.firstChild) {
    bookDisplay.removeChild(bookDisplay.lastChild);
  }
}

function addBookToLibrary(book) {
  // do stuff here
  let bookCard = document.createElement('div');
  let titleDiv = document.createElement('div');
  let authorDiv = document.createElement('div');
  let pagesDiv = document.createElement('div');
  let readDiv = document.createElement('div');

  let readStatus = document.createElement('button');

  let deleteBook = document.createElement('button');


  let titleText = document.createTextNode(book.title);
  titleDiv.appendChild(titleText);
  
  let authorText = document.createTextNode(book.author);
  authorDiv.appendChild(authorText);
  
  let pagesText = document.createTextNode(book.pages);
  pagesDiv.appendChild(pagesText);
  
  let readText = document.createTextNode(book.read);
  readDiv.appendChild(readText);

  readStatus.classList.add('readButton');
  

  deleteBook.classList.add('deleteButton');
  deleteBook.innerHTML = 'Delete';

  if(book.read === 'Started') {
    readStatus.innerHTML = 'Finished';
    bookCard.append(titleDiv, authorDiv, pagesDiv, readDiv, readStatus, deleteBook);
  } else if (book.read == 'Unstarted') {
    readStatus.innerHTML = 'Started'
    bookCard.append(titleDiv, authorDiv, pagesDiv, readDiv, readStatus, deleteBook);
  } else {
    bookCard.append(titleDiv, authorDiv, pagesDiv, readDiv, deleteBook);
  }
  
  if(book.read === 'Started' || book.read === 'Unstarted') {
    readStatus.addEventListener('click', (e) => {

      let index = (e.target.closest('div').attributes.data.value) -1;
      myLibrary[index].changeReadStatus('CHANGED');
      console.log(myLibrary[index]);
      deleteLibrary();
      displayMyLibrary(myLibrary)
  
    })
  }
  
  bookCard.classList.add('book-card');
  bookCard.setAttribute('data', myLibrary.length);


  deleteBook.addEventListener('click', (e) => {
    console.log(e.target.closest('div').attributes.data.value);
    console.log('Delete')
    e.target.closest('div').remove();
  })
  
  bookDisplay.appendChild(bookCard);
}

function resetInputs(inputArray) {
  inputArray.forEach((input) => {
   return input.value = '';
  })

}

displayMyLibrary(myLibrary);

// let removeBook = document.querySelectorAll('.deleteButton');

// removeBook.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     console.log(e.target.closest('div'));
//     console.log('Delete')
//   })
// })





