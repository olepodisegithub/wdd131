const products = [
{
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
},
{
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
},
{
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
},
{
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
},
{
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
}
];

displaySelectionOptions(products)

/* ###################### add select options ##########################*/

function displaySelectionOptions(option_list)
{
  const select = document.querySelector('select')
  

  option_list.map(createOption)

    function createOption(option) 
    {
        const id = option.id;
        const name = option.name;

        const optiontag = document.createElement("option")
        optiontag.value = id;
        optiontag.textContent = name;

        select.appendChild(optiontag)
    }
}

/* ###################### footer ##########################*/
const d = new Date();
let year = d.getFullYear();
document.getElementById('currentyear').innerHTML = `${year}`;

document.getElementById('lastModified').innerHTML = `Last Modification: ${document.lastModified}`
