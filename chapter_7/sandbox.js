const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', evt => {
    evt.preventDefault();

    testUserName();
});


// live feedback
form.username.addEventListener('keyup', evt => {
    evt.preventDefault();

    testUserName();
})

const testUserName = () => {
    //validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/; //any alpha char, any case, 6-12 characters long

    if(usernamePattern.test(username)) {
        //feedback good info
        feedback.textContent = 'That username is valid!';
        form.username.setAttribute('class', 'success');
    } else {
        // feedback bad info
        feedback.textContent = "Username must only containers letters and numbers, without 6-12 characters";
        form.username.setAttribute('class', 'error');
    }
}