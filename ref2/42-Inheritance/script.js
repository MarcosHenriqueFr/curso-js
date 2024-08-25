//Ajuda com a reutilização de código
//Permite que uma nova classe possua propriedades e méetodos de outra classe(parent -> child)
//Uma relação de parentesco entre classes
//Usamos a keyword extends na hora da criação da classe
//Pode ser útil para uma melhor organização do código com muitos child

class Animal{
    vivo = true;//lembrando que isso aqui são propriedades e não variáveis

    Comer(){
        console.log(`Esse(a) ${this.nome} está comendo`);//não precisa existir a propriedade na classe pai, já que estamos reusando código
    }

    Dormir(){
        console.log(`Esse(a) ${this.nome} está dormindo`);
    }
}

//class child extends parent
class Cachorro extends Animal{
    nome = "cachorro";
    idade = 4;
}

class Gato extends Animal{
    nome = "gato";

    saltar(){//childs podem ter suas propriedades e ações
        console.log("Esse "+this.nome+" saltou 2 metros!!");
    }
}

const gato = new Gato();//objetos
const cachorro = new Cachorro();

const Aranha = {
    nome: "aranha",
    idade: 1,
    SoltarTeia(){//Não precisa do function
        console.log(`Essa ${this.nome} fez uma teia de aranha!`);
    },
    Saltar: () => console.log(`A aranha está saltando!`),
}

// gato.vivo = false;

console.log(gato.vivo);
gato.Comer();
cachorro.Dormir();
gato.saltar();
Aranha.SoltarTeia();
Aranha.Saltar();
