//Reduz os elementos de uma array para um único valor

const precos = [12, 87, 8, 43, 52, 27];

let total = precos.reduce(soma);

console.log(total);

//0 + 12 -> 12 + 87 -> 99 + 8 -> ...
function soma(anterior, proximo){//ele vai fazendo cada iteração, transpondo o local do anterior
    return anterior + proximo;
}