
const frutas = [{nome: "Mamão", cor: "laranja", caloria: 56}, 
                {nome: "Maçã", cor: "vermelho", caloria: 45}, 
                {nome: "Melancia", cor: "verde", caloria: 300}, 
                {nome: "Banana", cor: "amarelo", caloria: 105}];

// Então posso usar os métodos específicos de uma array
// O for each é o mais completo no quesito elemento indice e array

// frutas.forEach(fruta => console.log(fruta.caloria));
const NomesFrutas = frutas.map(fruta => fruta.nome);

const Calorias = frutas.map(fruta => fruta.caloria);
const totalCal = Calorias.reduce((acumulador, elemento) => acumulador+elemento);//fiz um map e depois um reduce
const baixaCal = frutas.filter(fruta => fruta.caloria < 100);

//o que acumula e o que é o prox elemento
const MaxCalFruta = frutas.reduce(  (acumulador, elemento) => 
                                    elemento.caloria > acumulador.caloria ? elemento : acumulador);

const MinCalFruta = frutas.reduce((min, fruta) => fruta.caloria < min.caloria ? fruta : min);

/*
let TotalCalorias = function(){
    let total = 0;
    for(let i = 0; i < frutas.length; i++){
        total += frutas[i].caloria;
    }
    return total;
}
*/

console.log(Calorias);
console.log(totalCal);
console.log(baixaCal);
console.log(MaxCalFruta);
console.log(MinCalFruta);