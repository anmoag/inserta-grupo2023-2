
//crea dos funciones 
function crearArray(){
    let participantes = [];//creo el array
    var inputText = document.querySelector("#participantes").value;//recojo el valor de participante

    if (inputText == "") {//veo a ver si esta vacio o no
        alert("debes de poner los participantes");
     }else{
    participantes.push(inputText);
    console.log(participantes);//compruebo el array 
    document.querySelector("#participantes").value = "";//vacio el input

    }
    
    /*
    var participanteAleatorio1 = Match.floor(Match.randon() * participantesRestantes.length);
    var participanteAleatorio2 = Match.floor(Match.randon() * participantesRestantes.length);
    */
    }