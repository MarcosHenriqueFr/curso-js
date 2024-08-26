//Dá para fazer um objeto dentro do outro usando classes também

class Pessoa{

    constructor(nome, idade, ...end){
        this.nome = nome;
        this.idade = idade;
        this.end = new End(...end);//outro objeto dentro do outro
    }
}

class End{

    constructor(Rua, cidade, pais){
        this.Rua = Rua;
        this.cidade = cidade;
        this.pais = pais;
    }
}

const pessoa1 = new Pessoa("Jorge", 22, "12 - Raios Luz", "Natal", "Brasil");

console.log(pessoa1.end.pais);