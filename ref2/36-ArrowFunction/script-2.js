const numbers = [1, 2, 3, 4, 5, 6];

const quadrados = numbers.map((elemento) => {
    return elemento**2;
});

const cubos = numbers.map((elemento) => {
    return elemento**3;
});
//o método .map retorna uma nova array sem prejudicar a anterior

const pares = numbers.filter((elemento) => {return elemento%2 == 0});//o return não é necessário em uma linha
//o método .filter retorna o que resultar em true da condição

const total = numbers.reduce((acumulador, elemento) => acumulador+elemento);//o return é desnecessário em uma linha
//o .reduce funciona como um loop que passa por cada elemento da array

console.log(pares);
console.log(quadrados);
console.log(cubos);
console.log(total);