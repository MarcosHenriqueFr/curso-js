//return keyword

function soma(x, y){
    let resultado = x + y;//não precisa armazenar diretamente
    return resultado;
}

function Paridade(x){
    return x % 2 === 0 ? "número PAR" : "número ÍMPAR";
}

let resposta = soma(1, 6);
console.log(`O número ${resposta} é um ${Paridade(resposta)}`);