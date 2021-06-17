var x = document.getElementById("demo");


let key = "2b11cf7dc7241ecbf31cd0c11870ca24"
let city_name = document.getElementById("city_name")

function api_call() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&appid=${key}`)
    .then(response => response.json())
    .then(data => { 

        console.log(data.cod)

        if (data.cod === "404") {
            let alerta = `<div class="alert alert-danger" role="alert">
            Error 404: City Not Found
            </div>`;
            
            document.body.innerHTML = alerta;
        }


      
    })
  
    .catch(err => {
            let alerta = `<div class="alert alert-danger" role="alert">
            A simple danger alert—check it out!
            </div>`;
            
            document.body.innerHTML = alerta;

            console.log(err);
        
        }
    )
}


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

getLocation()

function owo() { 
    console.log(city_name.value);
}