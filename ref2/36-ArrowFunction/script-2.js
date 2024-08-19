const numbers = [1, 2, 3, 4, 5, 6];

const quadrados = numbers.map((elemento) => {
    return elemento**2;
});
//o método .map retorna uma nova array sem prejudicar a anterior

console.log(quadrados);