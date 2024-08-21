//Uma introdução para a programação orientada a objetos

//Uma coleção de propriedades ou métodos
//Podem representar objetos do mundo real (pessoas, produtos e lugares)
//objeto = {jey: vaor,  function()}

//os objetos não podem ter o mesmo nome
const pessoa1 = {
    primeiroNome: "John",
    ultimoNome: "Linch",
    idade: 20,
    Empregado: true,
    Apresentar: () => {console.log(`Olá meu nome é John Linch`)},//não funciona como uma função padrão
}

const pessoa2 = {//um objeto e suas características e suas funções
    primeiroNome: "Pedro",
    ultimoNome: "Moraes",
    idade: 18,
    Empregado: false,
    Falar: function(){console.log(`Olá meu nome é ${this.primeiroNome} ${this.ultimoNome}`)},
}

/*
console.log("\n"+pessoa1.primeiroNome+" "+pessoa1.ultimoNome);
console.log(`${pessoa1.primeiroNome} tem ${pessoa1.idade} anos\nEle está trabalhando: ${pessoa1.Empregado}`);

console.log("\n"+pessoa2.primeiroNome+" "+pessoa2.ultimoNome);
console.log(`${pessoa2.primeiroNome} tem ${pessoa2.idade} anos\nEle está trabalhando: ${pessoa2.Empregado}`);
*/

//Vai chamar a função do objeto normalmente

pessoa1.Apresentar();
pessoa2.Falar();