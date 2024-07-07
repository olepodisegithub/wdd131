/*_____________________________________ Start Hamburger ______________________________________*/
const ham = document.querySelector('#hamburger');
const nav = document.querySelector('nav');
const title = document.querySelector('#title');

ham.addEventListener('click', () => 
{
    ham.classList.toggle('open');
    nav.classList.toggle('open');
    title.classList.toggle('invisible');
});
/*_____________________________________ End Hamburger ______________________________________*/

/*_____________________________________ Start Highlight click link ______________________________________*/

function removeDeactivateAllLink()
{
  const tabs = document.querySelectorAll('nav a');
  tabs.forEach(tab => 
  {
    tab.classList.remove('active');
  });
}

/*_____________________________________ End Highlight click link ______________________________________*/

/*_____________________________________ Start Temples array ______________________________________*/
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
        templeName: "Aba Nigeria",
        location: "Aba, Abia, Nigeria",
        dedicated: "2005, August, 7",
        area: 114254,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/800x500/aba-nigeria-temple-lds-1636397-wallpaper.jpg"
      },
      {
        templeName: "Accra Ghana",
        location: "Accra, Greater Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 52142,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/800x450/accra-ghana-temple-detail-249022-2400x1200.jpg"
      },
      {
        templeName: "Adelaide Australia",
        location: "Marden, South Australia, Australia",
        dedicated: "2000, June, 15",
        area: 147511,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/800x450/adelaide-australia-temple-lds-866420-wallpaper.jpg"
      }
  ];

displayTemples(temples)
  
const home_link = document.getElementById('firslink');
home_link.addEventListener('click', () => 
{
  displayTemples(temples)

  removeDeactivateAllLink()
  home_link.classList.toggle('active');
});

const old_link = document.getElementById('oldlink');
old_link.addEventListener('click', () => 
{
  const old_temples =  temples.filter(temp => temp.dedicated.split(",")[0] < 1900)
  displayTemples(old_temples)

  removeDeactivateAllLink()
  old_link.classList.toggle('active');
});

const new_link = document.getElementById('newlink');
new_link.addEventListener('click', () => 
{
  const new_temples =  temples.filter(temp => temp.dedicated.split(",")[0] > 2000)
  displayTemples(new_temples)

  removeDeactivateAllLink()
  new_link.classList.toggle('active');
});
    
const large_link = document.getElementById('largelink');
large_link.addEventListener('click', () => 
{
  const large_temples =  temples.filter(temp => temp.area > 90000)
  displayTemples(large_temples)
  
  removeDeactivateAllLink()
  large_link.classList.toggle('active');
});
    
const small_link = document.getElementById('lastlink');
small_link.addEventListener('click', () => 
{
  const small_temples =  temples.filter(temp => temp.area < 10000)
  displayTemples(small_temples)

  removeDeactivateAllLink()
  small_link.classList.toggle('active');
});


function displayTemples(temples_list)
{
  const section = document.querySelector('section')
  while (section.hasChildNodes()) 
  {
    section.removeChild(section.firstChild);
  }

  temples_list.map(createCard)

    function createCard(temple) 
    {
      const templename = temple.templeName;
      const templelocation = temple.location;
      const templededication = temple.dedicated;
      const templearea = temple.area;
      const templeimage = temple.imageUrl;

      const art = document.createElement("article")

      const templename_tag = document.createElement("h2")
      templename_tag.innerText = templename
      art.appendChild(templename_tag)

      const templelocation_tag = document.createElement("h4")
      templelocation_tag.innerText = `LOCATION: ${templelocation}`
      art.appendChild(templelocation_tag)

      const templededication_tag = document.createElement("h4")
      templededication_tag.innerText = `DEDICATED: ${templededication}`
      art.appendChild(templededication_tag)

      const templearea_tag = document.createElement("h4")
      templearea_tag.innerText = `SIZE: ${templearea} sq ft`
      art.appendChild(templearea_tag)

      const templeimage_tag = document.createElement("img")
      templeimage_tag.setAttribute("src",templeimage)
      templeimage_tag.setAttribute("alt",templename)
      templeimage_tag.loading="lazy"
      
      art.appendChild(templeimage_tag)
      
      section.appendChild(art)
    }
}
/*_____________________________________ End Temples array______________________________________*/

    
