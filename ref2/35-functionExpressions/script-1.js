const numbers = [15, 16, 17, 18, 19, 20, 23, 76];

//ao invés de um callback eu executo uma função genérica
let quadrados = numbers.map(function(elemento){
    return elemento **= 2;//se vamos usa-las só uma vez é só colocar elas aqui, por isso também são genéricas
});

let maiorIdade = numbers.reduce(function(acumulador, elemento){
    return Math.max(acumulador, elemento);
});

let Menores = numbers.filter(function(elemento){
    return elemento < 18;
});

let Adultos = numbers.filter(function(elemento){
    return elemento >= 18;
});

// Funcionam em map, filter e reduce. Bom para economizar código e funções que só seriam utilizadas uma única vez.
// console.log("A maior idade é: "+maiorIdade+" anos!");
// console.log(Menores);
// console.log(Adultos);
// console.log(quadrados);