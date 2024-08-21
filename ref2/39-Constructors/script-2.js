const interfacePlayer = document.getElementById("info-player");//Aqui vai mostrar as infos de vida/nome
const interfaceZumbi = document.getElementById("info-zumbi");
const res = document.getElementById("res");//aqui vai mostrar as infos de ataque
const btnAtacar = document.getElementById("Atacar");
const btnComer = document.getElementById("Comer");
const btnIniciar = document.getElementById("Inicio");

btnComer.style.display = "none";
btnAtacar.style.display = "none";
btnIniciar.addEventListener("click", programa);

//Criação dos objetos:

const Player = {
    nome: "Carlos Alberto",
    vida: 20,
    Atacar: function(){return Zumbi.vida-=Math.floor(Math.random()*10)},//ataque de 0 a 9
    Comer: function(){
        let probabilidade = Math.floor(Math.random()*8)+1;
        this.vida+=probabilidade;
        return this.vida;
    },//comida de 1 a 8
}

const Zumbi = {
    nome: "Zumbi",
    vida: 40,
    Dano: function(){return Player.vida-=5},
}

//configs botões

function programa(){
    btnComer.style.display = "inline-block";
    btnAtacar.style.display = "inline-block";
    btnIniciar.style.display = "none";

    btnAtacar.onclick = function(){

        if(Zumbi.vida > 0){
            let probabilidade = Math.round(Math.random());
            if(probabilidade == 0){
                Zumbi.vida = Player.Atacar();
                res.innerHTML = "Seu ataque funcionou!";
            } else {
                Player.vida = Zumbi.Dano();
                res.innerHTML = "Você errou o ataque e ele te atacou!!";
            }
        } else {
            res.innerHTML = "Você ganhou e matou o monstro!!";
            return -1;
        }
        
        programa();
    }

    btnComer.onclick = function(){
        let ValorIni = Player.vida;
        Player.vida = Player.Comer();

        let diferenca = Player.vida - ValorIni;
        res.innerHTML = `Você comeu e recuperou ${diferenca} de vida`
        programa();
    }

    //Apresentando as informações: ficam no fim
    interfaceZumbi.innerHTML = `Monstro: ${Zumbi.nome}<br>Vida: ${Zumbi.vida}`;
    interfacePlayer.innerHTML = `Seu nome: ${Player.nome}<br>Vida: ${Player.vida}`;
}


