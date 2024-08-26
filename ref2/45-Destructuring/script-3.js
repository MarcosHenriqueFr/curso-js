//Extrair propriedades de um objeto e podem ter valores predefinidos

const pessoa1 = {
    nome: "Jorge Amaro",
    idade: 22,
    trabalho: "Carpinteiro",
}

const pessoa2 = {
    nome: "Clarice Lisboa",
    idade: 32,
    trabalho: "Designer de Interiores",
    hobby: "Cantar",
}

//mesma lógica da array, com os nomes das propriedades
const {nome, idade, trabalho, hobby="Sem hobby"} = pessoa2;
// Agiliza o processo de escrita dos elementos de um objeto, ao invés de pessoa2.nome é só nome

console.log(`${nome} tem ${idade} anos\nTrabalha como ${trabalho}\nSeu hobby é: ${hobby}`);