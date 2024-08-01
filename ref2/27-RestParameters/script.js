// Spread Operator - Divide uma array em elementos diversos
// Rest Parameter - Empacota elementos separados em uma array
// Bom, faz o inverso
// Permite que uma função trabalhe com uma variedade de números de argumentos empacotando eles em uma array

function Reserva(...comidas){//pega uma quantidade ilimitada de dados
    comidas.push("Arroz");
    console.log(...comidas);//basicamente jogamos para uma array
}//dá para retornar a array também

function pegarComida(...comidas){
    return comidas;
}

const com1 = "Pizza";
const com2 = "Hamburguer";
const com3 = "Batata Frita";
const com4 = "Frango";
const com5 = "Nuggets";

// Reserva(com1, com2, com3, com4, com5);

const comidas = pegarComida(com1, com2, com3, com4, com5);
console.log(...comidas);
