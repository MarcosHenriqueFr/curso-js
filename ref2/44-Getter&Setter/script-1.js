class Pessoa{

    constructor(primNome, ultNome, idade){
        this.primNome = primNome;
        this.ultNome = ultNome;
        this.idade = idade;
    }

    MaiorIdade(){//posso reusar normalmente os dados depois de verificados
        if(this.idade >= 18){
            console.log(`${this.primNome} é maior de idade!`);
        } else {
            console.log(`${this.primNome} é menor de idade!`);
        }
    }


    //typeof verifica o data type da propriedade
    //Sempre fazemos uma condição verificando o valor colocado na propriedade que é passado como parametro
    set primNome(novoPrimNome){
        if(typeof novoPrimNome === "string" && novoPrimNome.length > 0){
            this._primNome = novoPrimNome;
        } else {
            console.error("O primeiro nome deve ser uma string com caracteres!");
        }
    }

    set ultNome(novoUltNome){
        if(typeof novoUltNome === "string" && novoUltNome.length > 0){
            this._ultNome = novoUltNome;
        } else {
            console.error("O último nome deve ser uma string com caractereres!");
        }
    }

    set idade(novaIdade){
        if(typeof novaIdade === "number" && novaIdade >= 0){
            this._idade = novaIdade;
        } else {
            console.error("A idade deve ser um número maior ou igual a zero!");
        }
    }

    get primNome(){
        return this._primNome;
    }

    get ultNome(){
        return this._ultNome;
    }

    get idade(){
        return this._idade;
    }

    get NomeCompleto(){
        return this._primNome + " " + this._ultNome;
    }
}

const pessoa1 = new Pessoa("João", "Carlos", 21);
const pessoa2 = new Pessoa("Maria", "Clara", 14);

// console.log(`${pessoa1.primNome}\n${pessoa1.ultNome}\n${pessoa1.idade}`);
console.log(`${pessoa2.primNome}\n${pessoa2.ultNome}\n${pessoa2.idade}`);
console.log(`Seu nome é: ${pessoa2.NomeCompleto}`);
pessoa2.MaiorIdade();