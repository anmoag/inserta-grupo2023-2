//me quedan los condicionantes del resultado 

function crearArray() {
    var stringParticipantes = document.querySelector("#participantes");
    var arrayParticipantes = stringParticipantes.value.split(",");
    console.log(arrayParticipantes);
    var main = document.querySelector("#main");
    main.innerHTML = "";
    var arrayDesordenado = desordenarArray(arrayParticipantes);
    var table = document.createElement("table");
    //Si uso classlist no me aparece la tabla
    table.setAttribute("class", "table table-striped-columns");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var tr1 = document.createElement("tr");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    th1.innerHTML = "Participante";
    th2.innerHTML = "Regala a";
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    thead.appendChild(tr1);
    table.appendChild(thead);
    var indiceSiguiente = 0;
    for (var i = 0; i < arrayDesordenado.length; i++) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        td1.innerHTML = arrayDesordenado[i];
        if (indiceSiguiente === i) {
            indiceSiguiente = (indiceSiguiente + 1) % arrayDesordenado.length;
        }
        td2.innerHTML = arrayDesordenado[indiceSiguiente];
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
        indiceSiguiente = (indiceSiguiente + 1) % arrayDesordenado.length;
    }
    table.appendChild(tbody);
    document.querySelector("main").appendChild(table);
}

function desordenarArray(arrayParticipantes) {
    return arrayParticipantes.sort(() => Math.random() - 0.5);
}
