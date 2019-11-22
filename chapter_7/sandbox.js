const form = document.querySelector('.signup-form');

form.addEventListener('submit' evt => {
    evt.preventDefault();

    //validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/; //any alpha char, any case, 6-12 characters long
})