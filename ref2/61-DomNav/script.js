
/*
const elementoFilho = document.getElementById("bolo");
const elementoPai = elementoFilho.parentElement;
elementoPai.style.backgroundColor = "lightblue"
*/

const elemento = document.getElementById("frutas");
const filhos = elemento.children;//diferente, cria uma coleção HTML

Array.from(filhos).forEach(elemento => {
    elemento.style.backgroundColor = "blue";
});

filhos[0].style.backgroundColor = "yellow";