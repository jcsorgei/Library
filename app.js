let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pagesInput = document.getElementById("pages");
let readInput = document.getElementById("read");
let bookContainer = document.getElementById("bookContainer");






let myLibrary = [];

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read ? "read" : "not read yet"}`
    }

}

function submitForm(e) {
    e.preventDefault();
    var myModal = document.getElementById('exampleModal');
    var modal = bootstrap.Modal.getInstance(myModal)
    modal.toggle();
    addBookToLibrary();
}

function addBookToLibrary() {

    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = readInput.checked;

    myLibrary.push(new Book(title, author, pages, read));

    displayAllBooks();
}

function displayAllBooks() {
    bookContainer.innerHTML = "";
    myLibrary.forEach(book => {
        createCard(book);
    });

}

function createCard(book) {
    let id = myLibrary.indexOf(book);
    bookContainer.innerHTML +=
        `<div class="col">
        <div class="card" data-id="${id}">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <hr>
                <p class="card-text">By: ${book.author}</p>
                <hr>
                <p class="card-text">Number of pages: ${book.pages}</p>
                <hr>
                <div class="form-check form-switch">
                    <input onclick="changeCheck(event)" ${book.read ? "checked" : ""} class="form-check-input" type="checkbox" id="readCheck">
                    <label class="form-check-label" for="readCheck">${book.read ? "Read" : "Have not read"}</label>
                </div>
            </div>
            <div class="card-footer">
                <button  onclick="deleteCard(event)" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>`;

}

function deleteCard(e) {
    let id = e.target.closest(".card").dataset.id;
    console.log(id);
    myLibrary.splice(id, 1);
    displayAllBooks();
}

function changeCheck(e) {
    let id = e.target.closest(".card").dataset.id;
    console.log(id);
    myLibrary[id].read = e.target.checked;
    displayAllBooks();
}