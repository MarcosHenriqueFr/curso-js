let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    idade: 18,
    engordar(p=0){//a variavel já foi declarada no parâmetro formal
        console.log('Engordou')
        this.peso += p//o peso do objeto + p, faz referencia
    }
}

amigo.engordar(5)//funções dentro da variável
console.log(`O ${amigo.nome} pesa ${amigo.peso}KG`)//tipo em C
//console.log(typeof amigo)