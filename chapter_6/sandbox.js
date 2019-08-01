// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.npr.org/');
// link.innerText = "This is EN-PEE-AH";

// const para = document.querySelector('p');
// para.setAttribute('class', 'success');
// para

// const title = document.querySelector('h1');
// title.style.margin = '50px';

// const content = document.querySelector('p');
// content.classList.add('test');
// content.classList.remove('error');
// content.classList.add('success');
// console.log(content.classList);

const paraList = document.querySelectorAll('p');
console.log(paraList);
paraList.forEach(para => {
    console.log(para.innerHTML);
    para.innerHTML.includes('error') && para.classList.add('error');
    para.innerHTML.includes('success') && para.classList.add('success');
})