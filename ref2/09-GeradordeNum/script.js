/*

const min = 40;
const max = 200;

// let numAleatorio = Math.floor(Math.random() * 6);//de 0 a 5
let numAleatorio = Math.floor(Math.random() * (max - min)) + min;//de 1 a 6
//multiplica pelo valor max, e soma pelo valor min

console.log(numAleatorio);

*/
// Queremos fazer 3 dados d6
const botao = document.getElementsByTagName('button')[0];
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const max = 6;
const min = 1;
let numAleatorio;

botao.addEventListener("click", random);
function random(){
    numAleatorio = Math.floor(Math.random() * max) + min;
    label1.textContent = numAleatorio;
    numAleatorio = Math.floor(Math.random() * max) + min;
    label2.textContent = numAleatorio;
    numAleatorio = Math.floor(Math.random() * max) + min;
    label3.textContent = numAleatorio;
}

