const authorities = [
{
    type: "Landboard",
    name: "Kweneng Land Board",
    pobox: "P.O. Bag 006",
    location: "Molepolole",
    contact: "+267 592 2600",
    fax: "+267 5920360/437",
    imageUrl: "images/kweneng_landboard.webp"
},
{
    type: "Landboard",
    name: "Lentsweletau Sub Land Board",
    pobox: "P.O.Box 56",
    location: "Lentsweletau",
    contact: "+267 577 9216",
    fax: "",
    imageUrl: "images/kweneng_landboard.webp"
},
{
    type: "Landboard",
    name: "Lephephe Sub Land Board",
    pobox: "P.O. Box 30",
    location: "Sojwe",
    contact: "+267 596 0990",
    fax: "",
    imageUrl: "images/kweneng_landboard.webp"
},
{
    type: "Landboard",
    name: "Letlhakeng Sub Land Board",
    pobox: "P.O. Box 4",
    location: "Letlhakeng",
    contact: "+267 594 3015",
    fax: "",
    imageUrl: "images/kweneng_landboard.webp"
},
{
    type: "Landboard",
    name: "Mogoditshane Sub land Board",
    pobox: "P.O Box 2",
    location: "Mogoditshane",
    contact: "+267 390 5334",
    fax: "",
    imageUrl: "images/kweneng_landboard.webp"
},
{
    type: "Landboard",
    name: "Molepolole Sub Land Board",
    pobox: "Private Bag 006",
    location: "Molepolole",
    contact: "+267 592 0355",
    fax: "",
    imageUrl: "images/kweneng_landboard.webp"
},
{
    type: "Landboard",
    name: "Motokwe Sub Land Board",
    pobox: "P.O. Box 2",
    location: "Motokwe",
    contact: "+267 588 9084",
    fax: "",
    imageUrl: "images/kweneng_landboard.webp"
},
{
    type: "Landboard",
    name: "Thamaga Sub Land Board",
    pobox: "P.O.Box 223",
    location: "Thamaga",
    contact: "+267 599 9255",
    fax: "",
    imageUrl: "images/kweneng_landboard.webp"
},
{
    type: "Council",
    name: "Kweneng District Council",
    pobox: "",
    location: "Molepolole",
    contact: "(+267 )5922100,  (+267) 5920244,  Toll free No. 0800 600 794",
    fax: "(+267) 5920209/5920287",
    imageUrl: "images/kweneng_flag.webp"
},
{
    type: "Council",
    name: "Lentsweletau Sub District Council",
    pobox: "",
    location: "Lentsweletau",
    contact: "(+267 )5915122",
    fax: "",
    imageUrl: "images/kweneng_flag.webp"
},
{
    type: "Council",
    name: "Letlhakeng Sub District Council",
    pobox: "",
    location: "Letlhakeng",
    contact: " (+267) 5943013",
    fax: "267 5943025",
    imageUrl: "images/kweneng_flag.webp"
},
{
    type: "Council",
    name: "Mogoditshane / Thamaga Sub-District",
    pobox: "",
    location: "Mogoditshane",
    contact: "267 3105615",
    fax: "267 3105617",
    imageUrl: "images/mogo_sub_dis.webp"
},
{
    type: "Council",
    name: "Moshupa Sub District Council",
    pobox: "",
    location: "Moshupa",
    contact: "(+267) 5449270",
    fax: "(+267) 5449296",
    imageUrl: "images/moshupa.webp"
}
];

loadAuthorities()

function loadAuthorities()
{
    const section = document.querySelector('section')
    while (section.hasChildNodes()) 
    {
        section.removeChild(section.firstChild);
    }   

    displayAuthorities("Council",section)
    displayAuthorities("Landboard",section)
}

function displayAuthorities(type,section)
{

    const header = document.createElement("h1")
    header.innerText = `${type}s in Kweneng`
   section.appendChild(header)
    
    const selectedauthorities =  authorities.filter(auth => auth.type == type)

    selectedauthorities.map(createCard)

    function createCard(authority) 
    {
      const name = authority.name;
      const pobox = authority.pobox;
      const location = authority.location;
      const contact = authority.contact;
      const fax = authority.fax;
      const url = authority.imageUrl;

      const art = document.createElement("article")

      const name_tag = document.createElement("h2")
      name_tag.innerText = name
      art.appendChild(name_tag)

      const pobox_tag = document.createElement("h4")
      pobox_tag.innerText = `Postal Address: ${pobox}`
      art.appendChild(pobox_tag)

      const location_tag = document.createElement("h4")
      location_tag.innerText = `Location: ${location}`
      art.appendChild(location_tag)

      const contact_tag = document.createElement("h4")
      contact_tag.innerText = `Contact(s): ${contact}`
      art.appendChild(contact_tag)
      
      const fax_tag = document.createElement("h4")
      fax_tag.innerText = `Fax(s): ${fax}`
      art.appendChild(fax_tag)
     
      const url_tag = document.createElement("img")
      url_tag.setAttribute("src",url)
      url_tag.setAttribute("alt",name)
      url_tag.loading="lazy"
      art.appendChild(url_tag)
      
      section.appendChild(art)
    }
}