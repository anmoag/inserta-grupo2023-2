
//crea dos funciones 
function crearArray(){
    let participantes = [];//creo al array
    var inputText = document.querySelector("#participantes").value;
    if (inputText == "") {
       alert("Debesde introducir los nombres de participantes"); 
    }else{
    //capturamos el valor
    participantes.push(inputText);//y lo guardamos
    console.log(participantes);//compruebo el array 
    document.querySelector("#participantes").value = "";//vacio el input
    }
    }
    
    /*
    var participanteAleatorio1 = Match.floor(Match.randon() * participantesRestantes.length);
    var participanteAleatorio2 = Match.floor(Match.randon() * participantesRestantes.length);
    */
