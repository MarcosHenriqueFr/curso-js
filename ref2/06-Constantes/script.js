//Constantes


const PI = 3.14159;//evita a variação indesejada, em maiúscula para Numbers e booleans
let raio;
let circunferencia;
let res = document.getElementById('res')

/*
raio = window.prompt("Digite o raio do círculo: ");
raio = Number(raio);

circunferencia = 2 * PI * raio;

document.getElementById("meuh1").innerHTML = `A circunferencia é: ${circunferencia}`
*/

document.getElementById('botao').onclick = function(){
    raio = document.getElementById("txtraio").value;
    raio = Number(raio);

    circunferencia = 2*PI*raio;

    res.innerHTML = `<p>A circunferência é ${circunferencia}</p>`;
}