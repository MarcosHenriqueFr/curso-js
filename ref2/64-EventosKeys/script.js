//eventos = keyup, keydown
//Posso colocar um eventListener no document diretamente
//Tem as arrow keys também

const caixa = document.getElementById("caixa");

const quantMover = 10;

let x = 0;
let y = 0;

document.addEventListener("keyup", event => {
    caixa.style.backgroundColor = "lightblue";
    caixa.textContent = "😉";
});

document.addEventListener("keydown", event => {

    event.preventDefault();

    if(event.key.startsWith("Arrow")){

        caixa.style.backgroundColor = "tomato";
        caixa.textContent = "😲";

        switch(event.key){
            case "ArrowUp":
                y -= quantMover;
                break;
            case "ArrowDown":
                y += quantMover;
                break;
            case "ArrowLeft":
                x -= quantMover;
                break;
            case "ArrowRight":
                x += quantMover;
                break;
        }

        caixa.style.top = `${y}px`;
        caixa.style.left = `${x}px`;//Quando quiser fazer algo se mover, tem que mexer no top e left
    }
});