const books = JSON.parse(localStorage.getItem("books")) | [];
const bookFormOverlay = document.querySelector(".book-form-overlay");
const bookFormContainer = document.querySelector(".book-form-container")
const addNewBookBtn = document.querySelector(".add-new-book");
const main = document.querySelector(".main");



addNewBookBtn.addEventListener("click", openBookForm);
function openBookForm(){
    isFormOpen = true;
    bookFormOverlay.classList.add("active");
    bookFormContainer.classList.add("active");
}
bookFormOverlay.addEventListener("click", closeBookForm);
function closeBookForm(e){
    bookFormOverlay.classList.remove("active");
    bookFormContainer.classList.remove("active");
}