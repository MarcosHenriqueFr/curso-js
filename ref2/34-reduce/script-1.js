const notas = [12, 24, 87, 92, 65, 43, 21];

let maxima = notas.reduce(maiorNota);//reduzir a um valor
let minima = notas.reduce(menorNota);

console.log(maxima);
console.log(minima);

function menorNota(acumulador, elemento){
    return Math.min(acumulador, elemento);//analisa ambos os elementos que entram e saem como um laço
}
//as funções do Math prendem os valores que servem.
function maiorNota(acumulador, elemento){
    return Math.max(acumulador, elemento);//qual que é o maior de cada
}