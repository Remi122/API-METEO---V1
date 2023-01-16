var callBackGetSuccesslyon = function (data) {
    console.log("données api", data)
    //alert("Meteo temp :" + data.main.temp);

      
  
      // on ne met pas le # dans la fonction document.getElementById, c'est juste le nom d'identifiant mais 
      // par contre avec querySelector, on doit y mettre un point ou un dièse  => document.querySelector('.monClasse')
  
  
      // RECHERCHE PERSONALISEE
      var element = document.getElementById('test2');
      console.log(element);
      element.innerHTML = "Ville: " + data.name;
    
  
     var temperature = document.getElementById('ptest2');
     console.log(temperature);
     temperature.innerHTML = "Température: " + data.main.temp + "°C" + "  (" +data.weather[0].description+ ") ";
  
  
     var iconetemp = document.getElementById('imgicone');
     console.log(iconetemp);
  
     //  iconetemp=data.weather[0].icon ;
     
    iconetemp.setAttribute('src' , `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
  
    
  }
  
  
  
 
  async function searchlyon() {
  
  

    
  
    var url = "https://api.openweathermap.org/data/2.5/weather?q=lyon&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";
  
    // MyHeaders c'est l'en tête des requêtes et de réponses HTTP,  Ces actions incluent la récupération, la configuration, l’ajout et la suppression.
    var myHeader = new Headers();
  
    var myInit2 = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default'
    };
  
  
  
    
  
    
  
    await fetch(url, myInit2).then(async (data) => {
  
  
      // on devrait convertir les données via l'API en JSON car c'est encore des données encodées( on ne peut pas les traitées )
      const dataFetchedByAPI = await data.json();
  
  
      // ensuite on passe les données en JSON vers votre fonction d'affichage
      callBackGetSuccesslyon(dataFetchedByAPI);
    }).catch(() => {
  
        // ici la fonction Fetch passe  s'il y a un problème au niveau de traitement de la requête ou de réponse de l'API
  
        console.log("Error on fetched");
      });
  
    // $.get(url, callBackGetSuccess).done(function () {
    //   //alert( "second sucess" );
    // })
    //   .fail(function () {
    //     alert("error");
    //   })
    //   .always(function () {
    //     //alert( "finished" );
    //   });
  }
  
  
  // là on doit enlever l'appel de fonction car un fois que la page html se charge, vous appelez la fonction alors que la
  // fonction ne doit pas faire quelque chose tant qu'on ne clique sur le bouton correspondant donc ça risque de créer un bug au niveau de DOM car la fonction est apellée au début
  // et sera changera en undefined après appel
  
  // function buttonClickGET()
  
  
  // vous pouvez enlever les commmentaires si vous avez compris la fonctionnement 
  