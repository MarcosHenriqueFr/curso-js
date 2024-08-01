//Parece uma variável que carrega mais de um valor

let frutas = ["Maçã", "Banana", "Tomate"];
frutas.sort();//coloca em ordem alfabética
frutas.sort().reverse();//em ordem alfabetica reversa

// frutas.push("pão");
// frutas.pop();//remove ultimo elemento
// frutas.unshift("Manga");//coloca no primeiro
// frutas.shift();//remove o primeiro

//laços for in não são recomendados quando a ordem da array é importante
/*
for (let pos in frutas){//for (var in objeto)
    console.log(frutas[pos]);
}
*/

for(let fruta of frutas){//a construção é diferente do for in
    console.log(fruta);
}

//for que mostra o inverso
for(let i = frutas.length - 1; i >= 0; i--){
    console.log(frutas[i]);
}

// console.log(frutas.length + " frutas");
// console.log(frutas.indexOf("Banana"));//retorna -1 se não tiver o elemento