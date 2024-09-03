//Pode ser um objeto ou uma array, ou array de objetos
//JSON.stringify() = converte um objeto em js para um JSON string
//JSON.parse() = faz o exato inverso, string json para objeto em js
//fetch("url").then(reposta => resposta.json()).then(valor => console.log(valor))//retorna uma promise
//Por enquanto só funciona com o navegador

/* 
fetch("pessoas.json").then(resposta => resposta.json()).then(valores => valores.forEach(elemento => {
    console.log(elemento.name);
})).catch(error => {
    console.log(error);
});
*/
//fetch("nome do arquivo").then(uma função para abrir o arquivo).then(uma função que procura a informação dentro do arquivo)

/*
fetch("pessoa.json").then(arquivo => arquivo.json()).then(valor => {
    console.log(`The ${valor.name} have ${valor.age} years old!`);

    if(valor.isEmployed){
        console.log(`${valor.name} is employed!`);
    } else {
        console.log(`${valor.name} isn't employed!`);
    }
});
*/

fetch("pessoas.json").then(arquivo => arquivo.json()).then(valores => {
    let novosValores = valores.filter(elemento => {
        return elemento.isEmployed == false;
    });
    console.log(novosValores);
    valores.forEach((elemento, indice) => {
        console.log(`Person ${indice+1}`);
        console.log(`The ${elemento.name} have ${elemento.age} years old!`);

        if(elemento.isEmployed){
            console.log(`${elemento.name} is employed!`);
        } else {
            console.log(`${elemento.name} isn't employed!`);
        }
        });
}).catch(error => {
    console.log("Ocorreu o erro: "+error);
});