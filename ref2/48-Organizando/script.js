// sort() = método usado para organizar uma array no lugar
// Organiza elementos de uma string de maneira lexicografica, não alfabeticamente 
// Lexicográfico = (alfabeto + numero + simbolo) como strings

let numeros = [1, 3, 2, 4, 6, 7, 9, 8, 5, 10]

numeros.sort((a, b) => a-b);//função comparativa

console.log(numeros);