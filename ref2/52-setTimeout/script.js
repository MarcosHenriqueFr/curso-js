// Uma função que permite atrasar a execução de uma função depois de um determinado espaço de tempo
// O tempo é aproximado
// setTimeout(callback, delay(milissegundos));
// clearTimeout(timeout id);// uma variavel

let timerID;

function comecarTimer(){
    timerID = setTimeout(() => window.alert("Olá, Bom dia"), 3000);
}

function cancelarTimer(){
    clearTimeout(timerID);
}