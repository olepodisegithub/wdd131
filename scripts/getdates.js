
const d = new Date();
let year = d.getFullYear();
document.getElementById('currentyear').innerHTML = `${year}`;

document.getElementById('lastModified').innerHTML = `Last Modification: ${document.lastModified}`
