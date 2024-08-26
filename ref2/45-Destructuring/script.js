//Extrai valores de arrays e objetos, então os manda para variáveis de uma maneira conveniente
//[] = para arrays
//{} = para objetos

//trocar dois valores de var

let a = 2;
let b = 5;

[a, b] = [b, a];
//destructuring = nova array
//parece com uma distributiva

console.log(`${a} e ${b}`);