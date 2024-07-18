/*_____________________________________ Start Ensure Links are in flex on lare screen ______________________________________*/

function checkScreenAndFixNaviation(screen) 
{
  if (screen.matches) 
  {
    const nav = document.querySelector('nav');
    nav.classList.remove('open');

    const tabs = document.querySelectorAll('nav a');
    tabs.forEach(tab => 
    {
      tab.classList.remove('open');
    });
  } 
}

var screen = window.matchMedia("(min-width: 1000px)")
screen.addEventListener("change", function() 
{
  checkScreenAndFixNaviation(screen);
});

checkScreenAndFixNaviation(screen);

/*_____________________________________ Start Hamburger ______________________________________*/
const ham = document.querySelector('#hamburger');
const nav = document.querySelector('nav');

ham.addEventListener('click', () => 
{
    ham.classList.toggle('open');
    nav.classList.toggle('open');
});

/*_____________________________________ Start Highlight click link ______________________________________*/

const first_a = document.querySelector('#first');
first_a.classList.toggle('active');

const tabs = document.querySelectorAll('nav a');
tabs.forEach(tab => 
{
 tab.addEventListener('click', () => 
  {
    removeDeactivateAllLink()
    tab.classList.toggle('active');
  });
});

function removeDeactivateAllLink()
{
  const tabs = document.querySelectorAll('nav a');
  tabs.forEach(tab => 
  {
    tab.classList.remove('active');
  });
}

/* ###################### footer ############################# */

const d = new Date();
let year = d.getFullYear();
document.getElementById('currentyear').innerHTML = `${year}`;

document.getElementById('lastModified').innerHTML = `Last Modification: ${document.lastModified}`