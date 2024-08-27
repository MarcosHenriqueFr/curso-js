//Um jogo que aumenta ou diminui os pontos

function criarJogo(){
    let pontuacao = 0;

    function AumentarPontos(pontos){
        pontuacao += pontos;
        console.log(`+${pontos}pts`);
    }

    function DiminuirPontos(pontos){
        pontuacao -= pontos;
        console.log(`-${pontos}pts`);
    }

    function MostrarPontos(){
        console.log(`Sua pontuação final é: ${pontuacao}pts`);
    }

    return {AumentarPontos, DiminuirPontos, MostrarPontos};
}

const jogo1 = criarJogo();

jogo1.AumentarPontos(9);
jogo1.DiminuirPontos(3);
jogo1.AumentarPontos(7);

jogo1.MostrarPontos();