function soma(...numeros){
    let resultado = 0;

    for(let numero of numeros){
        resultado += numero;
    }
    return resultado;
}

function media(...numeros){
    let resultado = 0;

    for(let numero of numeros){
        resultado += numero;
    }
    resultado /= numeros.length;
    return resultado;
}

const total = soma(2,3,7);
const MediaTot = media(2,3,7);
//é muito bom quando fazer uma calculadora que vai adicionando valores do usuário até que ele decida resetar.

console.log(`O resultado total é: R$${total}`);
console.log(`A média é: R$${MediaTot}`);