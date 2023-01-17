let villeChoisie;

if("geolocation" in navigator) {
  navigator.geolocation.watchPosition((position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=lyon&appid=7f42d425391d93110bff703059411d37';
    
    let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
    requete.open('GET', url); // Nous récupérons juste des données
    requete.responseType = 'json'; // Nous attendons du JSON
    requete.send(); // Nous envoyons notre requête

    // Dès qu'on reçoit une réponse, cette fonction est executée
    requete.onload = function() {
      if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {
          let reponse = requete.response;
          // console.log(reponse);
          let temperature = reponse.main.temp;
          let ville       = reponse.name;
          // console.log(temperature);
          document.querySelector('#ptest2').textContent = temperature;
          document.querySelector('#test2').textContent = ville;
        }
        else {
          alert('Un problème est intervenu, merci de revenir plus tard.');
        }
      }
    }
  }, erreur, options);
  
  var options = {
    enableHighAccuracy: true
  }
}
else {
  villeChoisie = "lyon";
  recevoirTemperature(villeChoisie);
}



function recevoirTemperature(ville) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=lyon&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

  let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
  requete.open('GET', url); // Nous récupérons juste des données
  requete.responseType = 'json'; // Nous attendons du JSON
  requete.send(); // Nous envoyons notre requête

  // Dès qu'on reçoit une réponse, cette fonction est executée
  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        // console.log(reponse);
        let temperature = reponse.main.temp;
        let ville       = reponse.name;
        // console.log(temperature);
        document.querySelector('#ptest2').textContent = temperature;
        
      }
      else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
}