
  
 function sorteo() {
    var participantes=document.querySelector("#participantes");
    if (participantes.value == "") {
        alert("Debes de poner los participantes");
        participantes.focus();
    } else {
        var array = participantes.value.split(", ");
        var arrayTextos = [];
        while(array.length > 0){
            var posicionAleatoria = Math.floor(Math.random() * array.length);
            var participante = array[posicionAleatoria];
            var array = array.splice(posicionAleatoria,1);

          
           
        }
    
        var divContenedor = document.querySelector("#contenedor");
        var lista = document.createElement("p");
        divContenedor.appendChild(lista);
        lista.innerText = participante + "regala a " 
          
    }
}
           