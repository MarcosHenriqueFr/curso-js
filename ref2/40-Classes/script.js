//Uma feature do ES6, é uma maneira mais limpa e estruturada do que a com constructores de antes
//Vai ser bem útil quando alcançarmos o static, encapsulação e inheritance
//Uma mesma classe é reutilizável
//Lembrando que as funções dentro da classe são métodos

class Produto{
    constructor(nome, preco){//base para criação do objeto
        this.nome = nome;
        this.preco = preco;
    }

    MostrarProduto(){
        console.log(`Produto: ${this.nome}\nPreço: R$${this.preco.toFixed(2)}`)
    }

    CalculoTotal(taxas){
        return this.preco + (this.preco*taxas);
    }
}

const taxas = 0.1;

const produto1 = new Produto("Calças Pretas", 21.99);
const produto2 = new Produto("Moletom Bege", 120.10);

const total = produto1.CalculoTotal(taxas);

console.log("O valor a ser pago com taxas é: R$"+total.toFixed(2));

// produto2.MostrarProduto();
