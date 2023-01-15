function crearArray() {
    stringParticipantes = document.querySelector("#participantes");
    arrayParticipantes = stringParticipantes.value.split(",");
    console.log(arrayParticipantes);
    desordenarArray(arrayParticipantes);
}

function desordenarArray(arrayParticipantes) {
    var arrayDesordenado = arrayParticipantes.sort(() => Math.random() - 0.5);
    console.log(arrayDesordenado);
}