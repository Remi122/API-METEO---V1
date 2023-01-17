var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=paris&appid=7f42d425391d93110bff703059411d37&units=metric";

// On utilise la fonction fetch pour récupérer les données de l'API
fetch(apiUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // On récupère les données de l'API
    var location = data.name;
    var description = data.weather[0].description;
    var temperature= document.getElementById('ptest3');
    
    // On affiche les données dans les éléments HTML correspondants
    document.getElementById("test3").innerHTML = location;
    document.getElementById("ptest3").innerHTML = description;
    temperature.innerHTML = "Température: " + data.main.temp + "°C" + " (" +data.weather[0].description+ ") ";
    var iconetemp3 = document.getElementById('imgicone3');
    
    //  iconetemp=data.weather[0].icon ;
    
   iconetemp3.setAttribute('src' , `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
  });
