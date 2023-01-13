
//debeis crear dos funciones en la primera (crearArray) recibe un string con los nombres  separados por comas con .split separarlos "," y con .push meterlos en el array una vez creado el array retornarlo como parametro y en la segunda funcion (hacerSorteo) recibir el parametro y condicionar el array para que haga el sorteo.
function sorteoAmigoInvisible(){
    let participantes = [];
    var inputText = document.querySelector("#participantes").value;
    participantes.push(inputText);
    
    
    var participanteAleatorio1 = Match.floor(Match.randon() * participantesRestantes.length);
    var participanteAleatorio2 = Match.floor(Match.randon() * participantesRestantes.length);
    }