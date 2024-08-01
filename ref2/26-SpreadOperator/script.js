//Spread Operator - Retira todos os elementos de uma array
//Caracterizado por 3 pontos

let numbers = [23, 12, 32, 64, 10];
let numbersNew = [...numbers];//uma cópia de uma array

let maximo = Math.max(...numbers);//é melhor do que a partir do length
let minimo = Math.min(...numbers);//também é possível com strings

let nome = "Marcos C";
let letras = [...nome].join("-");//array de caracteres

console.log(letras);

console.log(numbers);
console.log(numbersNew);
console.log(minimo);
console.log(maximo);