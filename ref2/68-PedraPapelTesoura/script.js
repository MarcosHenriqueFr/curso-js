const escolhas = ["tesoura", "papel", "pedra"];

//Mostrar as escolhas do jogador e computador
const displayJogador = document.getElementById("displayJogador");
const displayComputador = document.getElementById("displayComputador");

//Mostra se ganhou ou perdeu
const resultado = document.getElementById("Resultado");
resultado.style.visibility = "hidden";

//Mostra os pontos de cada um

const scoreJogador = document.getElementById("scoreJogador");
const scoreComputador = document.getElementById("scoreComputador");
let scoreJ = 0;
let scoreC = 0;

function ComeçarJogo(){
    
    const aleatorio = Math.floor(Math.random()*3);
    let escolhaJogador = null;
    let escolhaComputador = escolhas[aleatorio];

    if(event.target.innerHTML === "👊"){
        escolhaJogador = escolhas[2];
    } else if(event.target.innerHTML === "🖐"){
        escolhaJogador = escolhas[1];
    } else if(event.target.innerHTML === "✌"){
        escolhaJogador = escolhas[0];
    }

    displayJogador.innerHTML = "Jogador: "+escolhaJogador;
    displayComputador.innerHTML = "Computador: "+escolhaComputador;

    mostrarResultado(escolhaJogador, escolhaComputador);
    mostrarScore(scoreJ, scoreC);

    function mostrarResultado(jogador, computador){

        resultado.style.textAlign = "center";
    
        if(jogador === computador){
            resultado.innerHTML = "Empate!";
        } else {
            switch(jogador){
                case escolhas[0]: resultado.innerHTML = (computador === escolhas[2]) ? "Você perdeu!" : "Você ganhou!";
                    break;
                case escolhas[1]: resultado.innerHTML = (computador === escolhas[0]) ? "Você perdeu!" : "Você ganhou!";
                    break;
                case escolhas[2]: resultado.innerHTML = (computador === escolhas[1]) ? "Você perdeu!" : "Você ganhou!";
                    break;
            }
        }
    
        resultado.classList.remove("empate", "ganhou", "perdeu");
        if(resultado.innerHTML === "Você ganhou!"){
            resultado.classList.add("ganhou");
            scoreJ++;
        } else if(resultado.innerHTML === "Você perdeu!"){
            resultado.classList.add("perdeu");
            scoreC++;
        } else {
            resultado.classList = "empate";
        }
    
        
        resultado.style.visibility = "visible";
    }
    
    function mostrarScore(scoreJ, scoreC){
        scoreJogador.innerHTML = `Score do Jogador: ${scoreJ}`;
        scoreComputador.innerHTML = `Score do Computador: ${scoreC}`;
    }
}