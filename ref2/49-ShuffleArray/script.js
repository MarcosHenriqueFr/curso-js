// Não use o sort 
// Usar o algoritmo fisher-yates
// Faça uma função com nome específico porque vai ser usada mais de uma vez

const cartas = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

Embaralhar(cartas);

console.log(cartas);

//Uma função que começa do fim da array e embaralha até o 0
function Embaralhar(array){
    for(let i = array.length - 1; i > 0; i--){
        const aleatorio = Math.floor(Math.random() * (i+1));

        [array[i], array[aleatorio]] = [array[aleatorio], array[i]];
    }
}