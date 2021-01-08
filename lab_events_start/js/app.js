document.addEventListener('DOMContentLoaded', () => {

    const textInputTitle = document.querySelector('#title');
    textInputTitle.addEventListener('submit', handleTitleInput);

    const textInputAuthor = document.querySelector('#author');
    textInputAuthor.addEventListener('submit', handleAuthorInput);

    const categorySelect = document.querySelector('#category');
    categorySelect.addEventListener('submit', handleCategorySelect);

    const saveForm = document.querySelector('#new-item-form');
    saveForm.addEventListener('submit', handleFormSubmit);



});

const handleFormSubmit = (save) => {
    save.preventDefault();


}

// const handleTitleInput = (titleText) => {
//     const inputResult = document.querySelector('#book-title');
//     inputResult.textContent = `${titleText.target.value}`;
// };

const handleAuthorInput = (authorText) => {
    const inputResult = document.querySelector('#author-name');
    inputResult.textContent = `${authorText.target.value}`;
};

const handleCategorySelect = (bookCat) => {
    const inputResult = document.querySelector('#book-category');
    inputResult.textContent = `${bookCat.target.value}`;
};