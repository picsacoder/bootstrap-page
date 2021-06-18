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
            

            document.getElementById("content").innerHTML = alerta


            
        }

        else {
            
            var coord = {lat:data.coord.lat ,lng: -data.coord.lat};

            var map = new google.maps.Map(document.getElementById('map'),{
                zoom: 10,
                center: coord
            });

            var marker = new google.maps.Marker({
                position: coord,
                map: map
            });
        

            console.log(data.weather[0].description)
            let tarjeta = `<div class="card w-75 h-75" style="width: 18rem; margin: 0 auto;">

                <div class="card-body">
                <h5 class="card-title">${city_name.value}</h5>
                <h6 class="card-title">${data.weather[0].main}</h6>
                <br>
                <p class="card-text">Description: ${data.weather[0].description}.</p>
                <p class="card-text">Temperature: ${data.main.temp}</p>
                <p class="card-text">Country: ${data.sys.country}</p>
                <p class="card-text">Cloudiness: ${data.clouds.all}%</p>


                </div>
            </div>`

            document.getElementById("content").innerHTML = tarjeta
        }


      
    })
  
    .catch(err => {

            console.log(err);
        
        }
    )
}




function owo() { 
    console.log(city_name.value);
}

function FuncionInutil(event) {
    var codigo = event.keyCode;
     
    if(codigo === 13){
      api_call()
    }
    
 }


 function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}