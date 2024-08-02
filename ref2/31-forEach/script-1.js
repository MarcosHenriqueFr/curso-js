let frutas = ["banana", "maçã", "mamão", "goiaba"];

frutas.forEach(primeiraMaiuscula);
frutas.forEach(mostrar);

function primeiraMaiuscula(elemento, indice, array){
    array[indice] = elemento.charAt(0).toUpperCase() + elemento.slice(1);
    //duas strings foram criadas
}

function mostrar(elemento){
    console.log(elemento);
}

function maiuscula(elemento, indice, array){
    array[indice] = elemento.toUpperCase();
}