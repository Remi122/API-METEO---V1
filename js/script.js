
var callBackGetSuccess = function(data) {
    console.log("données api", data)
    //alert("Meteo temp :" + data.main.temp);
    var btn= document.querySelector("#icone");
    btn.addEventListener("click", () => {
    var element = document.getElementById('#test');
    element.innerHTML = "Température = " + data.main.temp;
   })
}



function buttonClickGET() {


    var ville = document.getElementById("queryLoc").value;
    
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+ ville +"&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";
    
    $.get(url, callBackGetSuccess).done(function() {
      //alert( "second sucess" );
    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
      //alert( "finished" );
    }); 
}

function buttonClickGET()


