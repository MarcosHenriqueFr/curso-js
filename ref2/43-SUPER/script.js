//super = usada para chamar o constructor ou acessar as propriedades e métodos de um parent(super classe)
//this = object
//super = parent

//Se eu tenho um código que é usado em todos os meus childs, eu posso executar eles no constructor do parent
//Basicamente é um método que joga os parametros para o parent

class Animal{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    MostrarInfo(){
        console.log(`Esse animal se chama: ${this.nome}\nE tem uma idade de ${this.idade} anos!`);
    }

    Movimentacao(velocidade){
        console.log(`Esse ${this.nome} se move a ${velocidade} KM/H!`)
    }
}

class Coelho extends Animal{//uma relação entre constructors obrrigatória
    constructor(nome, idade, CorridaVel){
        super(nome, idade);
        this.CorridaVel = CorridaVel;
    }

    Correr(){
        console.log(`${this.nome} consegue correr!`);
        super.Movimentacao(this.CorridaVel);
        //consigo executar uma função da super dentro da função da child
    }
}

class Pardal extends Animal{
    constructor(nome, idade, VooVel){
        super(nome, idade);
        this.VooVel = VooVel;
    }

    Voar(){
        console.log(`${this.nome} consegue voar!!`);
        super.Movimentacao(this.VooVel);
    }
}

const coelho = new Coelho("coelho", 2, 32);
const pardal = new Pardal("pardal", 1, 40);

/*
coelho.MostrarInfo();
coelho.Correr();
*/

pardal.MostrarInfo();
pardal.Voar();