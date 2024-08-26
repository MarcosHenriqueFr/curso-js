// Passar o objeto como um parametro e desestruturar ele

//deixa mais rápido
function MostrarPessoa({nome, idade, trabalho, hobby="Sem hobby"}){
    console.log(`${nome} tem ${idade} anos\nTrabalha como ${trabalho}\nSeu hobby é: ${hobby}`);
}

const pessoa1 = {
    nome: "Jorge Amaro",
    idade: 22,
    trabalho: "Carpinteiro",
}

const pessoa2 = {
    nome: "Clarice Lisboa",
    idade: 32,
    trabalho: "Designer de Interiores",
    hobby: "Cantar",
}

MostrarPessoa(pessoa2);