const form = document.querySelector('.signup-form');

form.addEventListener('submit', e => {
    e.preventDefault;

    console.log(form.username.value);
});

const username = "shaunbomb";
const pattern = /^[a-z]{6,}&/; // a regular expression is in between two slashes, like how a string is between two quotes. This is for lower-case characters, as least 6 char long, no special char at end or start (^ = start, $=send)

let result = pattern.test(username);
if(result) {
    console.log("Regex test passed");
} else {
    console.log("Regex test failed");
}