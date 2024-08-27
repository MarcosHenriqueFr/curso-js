
const display = document.getElementById("Cont");
let timer = null;
let comTimer = 0;
let passadoTimer = 0;
let Funcionando = false;

function comecar(){

    if(!Funcionando){
        comTimer = Date.now() - passadoTimer;
        timer = setInterval(atualizar, 10);
        Funcionando = true;
    }
}

function parar(){
    
    if(Funcionando){
        clearInterval(timer);
        passadoTimer = Date.now() - comTimer;
        Funcionando = false;
    }
}

function resetar(){
    clearInterval(timer);
    comTimer = 0;
    passadoTimer = 0;
    Funcionando = false;
    display.innerHTML = "00:00:00:00";

}

function atualizar(){
    const tempoAtual = Date.now();
    passadoTimer = tempoAtual - comTimer;

    let horas = Math.floor(passadoTimer / (1000 * 60 * 60));
    let minutos = Math.floor(passadoTimer / (1000 * 60) % 60);
    let segundos = Math.floor(passadoTimer / 1000 % 60);
    let milsegundos = Math.floor(passadoTimer % 1000 / 10);

    horas = horas.toString().padStart(2, "0");
    minutos = minutos.toString().padStart(2, "0");
    segundos = segundos.toString().padStart(2, "0");
    milsegundos = milsegundos.toString().padStart(2, "0");

    display.innerHTML = `${horas}:${minutos}:${segundos}:${milsegundos}`;
}