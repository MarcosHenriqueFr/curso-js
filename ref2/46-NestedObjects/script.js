//Objetos dentro de outros objetos

function MostrarInfo({nome, idade, trabalho, Estudante, hobbies, Endereco}){
    console.log(`A pessoa ${nome} tem ${idade} anos!\nTrabalha como ${trabalho}`);
    
    Estudante ? console.log(`${nome} é estudante`) : console.log(`${nome} não é estudante`);

    const [primHobby, segHobby, terHobby] = hobbies;

    console.log(`Seus hobbies são: ${primHobby}, ${segHobby} e ${terHobby}.`)

    console.log(`${nome} mora na rua ${Endereco.Rua} na casa ${Endereco.Casa} no conjunto ${Endereco.Conjunto}.`);
}

const pessoa1 = {
    nome: "Carla",
    idade: 23,
    trabalho: "Programadora",
    Estudante: false,
    hobbies: ["Desenhar", "Costura", "Academia"],

    Endereco: {
        Rua: 12,
        Casa: 8,
        Conjunto: "Bandeirantes",
    }
}

const pessoa2 = {
    nome: "João Guedes",
    idade: 47,
    trabalho: "Servidor Público",
    Estudante: false,
    hobbies: ["Dominó", "Mecânica", "Academia"],

    Endereco: {
        Rua: 2,
        Casa: 64,
        Conjunto: "Raio",
    }
}

MostrarInfo(pessoa2);

//Dá para fazer um loop padrão com for in
// é menos especificado, só que é um loop específico para objetos
for(const prop in pessoa2.Endereco){
    console.log(pessoa2.Endereco[prop]);
}