
var saveButton = document.getElementById("button-with-icon1");
    saveButton.addEventListener("click", function() {
        // Récupération des informations à sauvegarder
       // var name = document.getElementById("name-input").value;
       // var email = document.getElementById("email-input").value;
        
        // Stockage des informations dans LocalStorage
        localStorage.setItem("test3", test3.outerHTML);
        document.getElementById("1test").innerHTML = test3.outerHTML;
        //const myData = localStorage.getItem('test3');
        
       
    })

