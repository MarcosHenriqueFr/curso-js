//Minha tentativa
const min = 1;
const max = 100;
const resposta = Math.floor(Math.random() * (max - min + 1)) + min;

let trabalhando = true;
let chute;
let tentativa = 0;


console.log(resposta);

window.alert("Adivinhador de números!!!!!!");

while(trabalhando){
    chute = window.prompt(`Chute um número entre ${min} e ${max}"`);
    chute = Number(chute);

    if(isNaN(chute) || chute === null){
        window.alert("Não digitou um número!");
    } else if(chute > max || chute < min){
        window.alert("Você saiu do escopo");
    } else {
        tentativa++;

        if(chute === resposta){
        window.alert(`Parabéns você acertou. O número era ${resposta}`);
        document.getElementById("meuh1").innerHTML = `Parabéns jogador!!!<br>Você teve ${tentativa} tentativas`;
        trabalhando = false;
        } else {
            window.alert("Você errou!!!!!");
            window.alert(chute > resposta ? `Chute: ${chute}. Muito Alto` : `Chute: ${chute}. Muito baixo`);
        }
    }

}


