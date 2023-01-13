
  

function sorteo() {
    var participantes=document.querySelector("#participantes");
    if (participantes.value == "") {
        alert("Debes de poner los participantes");
        participantes.focus();
    } else {
        var array = participantes.value.split(", ");
        var arrayTextos = [];
        while(array.length > 0){
            console.log("array", array);
            var posicionAleatoria = Math.floor(Math.random() * array.length);
            var participante1 = array[posicionAleatoria];
            console.log("participante", participante1);
            array.splice(posicionAleatoria,1);
            console.log("nº elementos: ", array.length);
            console.log("array", array);
           
            //Creamos los div y vamos poniendo los participantes

            // var participante2 = array[Math.floor(Math.random() * array.length)];
            // array.splice(participante2);
            // console.log("array", array);
            // var linea = participante1 + " regala a " + participante2;
            // console.log("Línea", linea);
            // console.log("array", array);
            // arrayTextos.push(linea);
            // console.log("arrayTextos=", arrayTextos);
        }


        array = array.splice(participante1);
        console.log(array)
        var posicionAleatoria = Math.floor(Math.random() * array.length );
        var participante2 = array[posicionAleatoria];
        
    }
}
/*function combine(list) {

    var pairs = new Array((list.length * (list.length - 1)) / 2),

    pos = 0;

    for (var i = 0; i < list.length; i++) {

        for (var j = i + 1; j < list.length; j++) {

            pairs[pos++] = [list[i], list[j]];

        }

    }

    return pairs;

    }

var result = combine([1, 2, 3, 4]);
console.log("Combinaciones = "+ JSON.stringify(result));*/