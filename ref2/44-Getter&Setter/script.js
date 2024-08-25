//getter = método especial que deixa uma propriedade legivel
//setter = método especial que deixa uma propriedade gravável
//Valida e modifica um valor quando lê/escreve uma propriedade
//Validação na criação do objeto

class Retangulo{
    constructor(altura, comprimento){
        this.altura = altura;
        this.comprimento = comprimento;
    }

    //o _ é para dizer que é uma propriedade privada para outros devs não relacionarem com a altura anterior. VALIDAÇÃO = PROPRIEDADES PRIVADAS
    //Economia de código
    set altura(novaAltura){
        novaAltura > 0 ? this._altura = novaAltura : console.error("A altura DEVE ter valor POSITIVO!");
    }

    set comprimento(novoComp){//eu consigo gravar as propriedades, mas o programa não consegue ler
        novoComp > 0 ? this._comprimento = novoComp : console.error("O comprimento DEVE ter valor POSITIVO!");
    }

    get altura(){//legíveis para o programa
        return this._altura.toFixed(1)+"cm^2";
    }

    get comprimento(){//estamos dentro da propriedade
        return this._comprimento.toFixed(1)+"cm^2";
    }

    get area(){//"crio" uma nova propriedade e consigo acessar ela
        return (this._altura * this._comprimento).toFixed(1)+"cm^2";
    }
}

const retangulo = new Retangulo(3, 8);

// retangulo.altura = "banana";
// retangulo.comprimento = -10000;
//se alguém reescrever ainda vai aparecer os erros e os valores originais

console.log(retangulo.altura);
console.log(retangulo.comprimento);
console.log(retangulo.area);