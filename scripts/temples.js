const ham = document.querySelector('#hamburger');
const nav = document.querySelector('nav');
const title = document.querySelector('#title');

ham.addEventListener('click', () => 
{
    ham.classList.toggle('open');
    nav.classList.toggle('open');
    title.classList.toggle('invisible');
});