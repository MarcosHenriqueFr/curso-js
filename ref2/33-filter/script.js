//cria uma array filtrando elementos.

let numeros = [1, 2, 8, 9, 6, 7, 5];

let numerosPares = numeros.filter(paridade);
let numerosImpares = numeros.filter(Imparidade);
//agora separamos a array em dois e ainda temos a original

console.log(numerosImpares);
console.log(numerosPares);

function paridade(elemento){
    return elemento % 2 == 0;//joga os que forem true para dentro da array
}

function Imparidade(elemento){
    return elemento % 2 !== 0;//estritamente diferente de 0
}