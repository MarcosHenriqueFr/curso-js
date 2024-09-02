// Uma coleção estática de elementos HTML, pelo id, class ou elemento
// Pode ser criada com o querySelectorAll
// Parecido com uma array, mas sem o map, filter e reduce
// Não vão atualizar automaticamente, caso haja uma remoção/adição no DOM

let botoes = document.querySelectorAll(".btn");

/* 
botoes.forEach(elemento => {
    elemento.style.backgroundColor = "tomato";
    elemento.textContent += "😁";
});
*/

const novoBtn = document.createElement("button");
novoBtn.textContent = "botão 5";
novoBtn.classList = "btn";
document.body.appendChild(novoBtn);

//Não adicionou porque é estático

botoes = document.querySelectorAll(".btn");//Tem que reatribuir

botoes.forEach((botão, indice) => {
    botão.addEventListener("click", event => {
        botão.style.backgroundColor = "red";
        event.target.remove();//ainda fica no node
        botoes = document.querySelectorAll(".btn");
    });

    botão.addEventListener("mouseover", (event) => {
        event.target.backgroundColor = "orange";
        event.target.textContent += "🙄";
    });

    botão.addEventListener("mouseout", event => {
        event.target.backgroundColor = "hsl(205, 100%, 60%)";
        event.target.innerHTML = `botão ${indice+1}`;
    });
    
});
