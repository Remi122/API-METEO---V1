var callBackGetSuccess = function (data) {
  console.log("données api", data)
  //alert("Meteo temp :" + data.main.temp);
  var btn = document.querySelector("#icone");


  

  btn.addEventListener("click", () => {
    

    // on ne met pas le # dans la fonction document.getElementById, c'est juste le nom d'identifiant mais 
    // par contre avec querySelector, on doit y mettre un point ou un dièse  => document.querySelector('.monClasse')


    // RECHERCHE PERSONALISEE
    var element = document.getElementById('test');
    console.log(element);
    element.innerHTML = "Ville: " + data.name;


   var temperature = document.getElementById('ptest1');
   console.log(temperature);
   temperature.innerHTML = "Température: " + data.main.temp + "°C" + "  (" +data.weather[0].description+ ") ";


   var iconetemp = document.getElementById('imgicone');
   console.log(iconetemp);

   //  iconetemp=data.weather[0].icon ;
   
  iconetemp.setAttribute('src' , `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)



  })
}



function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('heure').innerHTML =
  "Aujourd'hui: "+h + ":" + m;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
 


function startTime2() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('heure2').innerHTML =
  "Aujourd'hui: "+h + ":" + m;
  var t = setTimeout(startTime, 500);
}
startTime2();

function startTime3() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('heure3').innerHTML =
  "Aujourd'hui: "+h + ":" + m;
  var t = setTimeout(startTime, 500);
}
startTime3();





async function buttonClickGET() {


  var ville = document.getElementById("queryLoc").value;
  

  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";

  // MyHeaders c'est l'en tête des requêtes et de réponses HTTP,  Ces actions incluent la récupération, la configuration, l’ajout et la suppression.
  var myHeaders = new Headers();

  var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
  };



  

  // Fetch 
  // L'API Fetch fournit une interface pour la récupération de ressources (e.g., à travers le réseau.) 
  // Elle paraîtra familière à tout utilisateur de XMLHttpRequest, mais cette nouvelle API propose néanmoins un ensemble 
  // de fonctionnalités plus souples et plus puissantes.

  // Donc on utilise Fetch pour récupérer des données via un url d'API 

  // Fetch prend 2 paramètres ( l'url de votre API et le paramètre d'initialisation )


  // await & async est une déclaration d'une fonction asynchrone, 
  // on doit déclarer la fonction comme asynchrone car avant de passer les données de l'API vers votre fonction callBackGetSuccess,
  // on doit d'abord attendre les données via l'API et le convertir en JSON, puis la passer dans votre fonction

  await fetch(url, myInit).then(async (data) => {


    // on devrait convertir les données via l'API en JSON car c'est encore des données encodées( on ne peut pas les traitées )
    const dataFetchedByAPI = await data.json();


    // ensuite on passe les données en JSON vers votre fonction d'affichage
    callBackGetSuccess(dataFetchedByAPI);
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
