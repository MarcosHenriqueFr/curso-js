//O que é this
//Quando queremos acessar uma propriedade de dentro do objeto
//o this não funciona em arrow functions, porque ela se refere ao objeto da janela do navegador que possui diferentes propriedades.

// console.log(this);//se estivesse em um navegador, mostraria o objeto da janela

const pessoa = {
    nome: "Jorge",
    comidaPreferida: "Melancia",
    DigaOi: function(){console.log(`Olá meu nome é ${this.nome}`)},
    Comer: function(){console.log(`${this.nome} está comendo ${this.comidaPreferida}`)},
}

pessoa.DigaOi();
pessoa.Comer();