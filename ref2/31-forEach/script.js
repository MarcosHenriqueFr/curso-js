// Basicamente é um método que passa por cada elemento de uma array e aplica um callback para uma função
//ele passa o elemento, seu index, e a array

let numeros = [1, 6, 8, 0, 8];

// numeros.forEach(dobrar);//2, 12, 16, 0, 16
// numeros.forEach(quadruplicar);//8, 48, 64, 0, 64
// numeros.forEach(quadrado);
numeros.forEach(potencia);
numeros.forEach(mostrar);//já passa o parametro

function potencia(elemento, indice, array){
    array[indice] = elemento**2;//já tem potência no js
}

function dobrar(elemento, indice, array){//nessa ordem
    array[indice] = elemento * 2;
}

function quadruplicar(elemento, indice, array){
    array[indice] = elemento * 4;
}

function quadrado(elemento, indice, array){
    array[indice] = Math.sqrt(elemento).toFixed(2);
}

function mostrar(numero){
    console.log(numero);
}