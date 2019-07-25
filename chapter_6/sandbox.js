const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.npr.org/');
link.innerText = "This is EN-PEE-AH";

const para = document.querySelector('p');
para.setAttribute('class', 'success');
para

const title = document.querySelector('h1');
title.style.margin = '50px';