var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=lyon&appid=7f42d425391d93110bff703059411d37";

// On utilise la fonction fetch pour récupérer les données de l'API
fetch(apiUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // On récupère les données de l'API
    var location = data.name;
    var description = data.weather[0].description;
    var temperature= document.getElementById('ptest2');
    
    // On affiche les données dans les éléments HTML correspondants
    document.getElementById("test2").innerHTML = location;
    //document.getElementById("ptest2").innerHTML = description;
    temperature.innerHTML = "Température: " + data.main.temp + "°C" + "  (" +data.weather[0].description+ ") ";
    var iconetemp2 = document.getElementById('imgicone2');
    
    //  iconetemp=data.weather[0].icon ;
    
   iconetemp2.setAttribute('src' , `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
  });
