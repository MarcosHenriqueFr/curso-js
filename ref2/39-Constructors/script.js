//Constructors = Um método especial para definir as propriedades e os métodos dos objetos
//Caso tenhamos que criar diversos objetos
//Basicamente é o que acontecia quando se pegava a data automaticamente do navegador
//Uma função parecida com um objeto

//Escreva algo que faça sentido
function Carro(marca, modelo, ano, cor){
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano,
    this.cor = cor,//não precisa de , na ultima
    this.dirigir = function(){console.log(`Você dirige esse ${this.modelo}`)}
}

const Carro1 = new Carro("Ford", "Mustang", 2024, "azul");//agiliza muito o processo de criação

console.log(Carro1.marca);
console.log(Carro1.modelo);
console.log(Carro1.ano);
console.log(Carro1.cor);
Carro1.dirigir();