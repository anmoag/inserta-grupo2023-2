function sorteoAmigoInvisible(){
    let participantesRestantes = [];
    var reciboParticipante = document.querySelector("#participantes").value();
    participantesRestantes.push(reciboParticipante);
   var participanteAleatorio1 = Match.floor(Match.randon() * participantesRestantes.length);
    var participanteAleatorio2 = Match.floor(Match.randon() * participantesRestantes.length);
    }