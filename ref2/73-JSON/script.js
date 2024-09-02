//Pode ser um objeto ou uma array, ou array de objetos
//JSON.stringify() = converte um objeto em js para um JSON string
//JSON.parse() = faz o exato inverso, string json para objeto em js
//fetch("url").then(reposta => resposta.json()).then(valor => console.log(valor))//retorna uma promise

fetch("pessoas.json").then(resposta => resposta.json()).then(valores => valores.forEach(elemento => {
    console.log(elemento.name);
})).catch(error => {
    console.log(error);
});