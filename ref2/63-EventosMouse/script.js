//.addEventListener(evento, função)
//eventos = click, mouseover, mouseout
//o evento é um objeto que contém informação
//é passado automticamente

const caixa = document.getElementById("caixa");
const btn = document.getElementById("btn");

btn.addEventListener("click", event => {
    caixa.style.backgroundColor = "red";
    caixa.innerHTML = "EI! 😡";
});

btn.addEventListener("mouseover", event => {
    caixa.style.backgroundColor = "yellow";
    caixa.textContent = "Não faça isso! 😨";
});

btn.addEventListener("mouseout", event => {
    caixa.style.backgroundColor = "lightgreen";
    caixa.textContent = "Clique em mim 😊"
});