
/*
let resultado = window.prompt('Insira aqui sua comida favorita: ');
let res = document.getElementById('meup');

res.style.textAlign = 'center';
res.style.fontWeight = 'Bolder';
res.innerHTML = `Sua comida preferida é: ${resultado}`;
*/

//Vamos aplicar o método do HTML pelo Javascript

let res = document.getElementById('meup');
let comida = 0;

document.getElementById("botao").onclick = function(){//uma function genérica
    comida = document.getElementById("meutexto").value;
    res.innerHTML = `<br><p>Sua comida preferida é: ${comida}</p>`;//mostrar no HTML, .textContent funciona também
}


