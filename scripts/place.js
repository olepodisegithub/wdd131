/************** weather icon ***************/
const weather = document.getElementById("weather");
function myFunction(mdq) 
{
    if (mdq.matches) { // If media query matches
        const weather_icon = document.getElementById("weather-icon");
        weather.firstElementChild.textContent = `Weather`;
        weather_icon.textContent = `🌤`;
        /*moveDivToMain()*/
    }
    else
    {
        const weather_icon = document.getElementById("weather-icon");
        weather.firstElementChild.textContent = `Weather 🌤`;
        weather_icon.textContent = ``;
        /*moveDivFromMain()*/
    }
}
  
var mdq = window.matchMedia("(max-width: 1000px)")

myFunction(mdq);
mdq.addEventListener("change", function() 
{
  myFunction(mdq);
});

/************** footer ***************/

const d = new Date();
let year = d.getFullYear();
document.getElementById('currentyear').innerHTML = `${year}`;

document.getElementById('lastModified').innerHTML = `Last Modification: ${document.lastModified}`

/************** wind chill ***************/

var temperature= 5;
var windspeed= 9;
var windChill= ''; 

if (temperature <= 10 && windspeed > 4.8)
{
  windChill = calculateWindChill(temperature,windspeed);
  document.getElementById("chil-value").innerHTML= Math.round(windChill) + ` &deg;C`;
}
else
{
  windChill = 'N/A'
  document.getElementById("chil-value").innerHTML= `N/A`;
}

function calculateWindChill(temperature, wind_speed) 
{
  return (35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temperature*Math.pow(windspeed,0.16));
}
