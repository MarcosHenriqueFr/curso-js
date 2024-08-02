//map method, é bem parecido com o forEach, só que ele retorna uma nova array
//armazena tudo em uma nova array
//o forEach muda os elementos originais
//As vezes nem vai precisar de indice e array 

const numeros = [1, 2, 3, 4, 5];

const quadrados = numeros.map(quadrado);

console.log(numeros);
console.log(...quadrados);

function quadrado(elemento){
    return elemento **= 2;
}