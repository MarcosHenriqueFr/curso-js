
mostrarAlfabeto(8);

function mostrarAlfabeto(numero){

    const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let letras = alfabeto.slice(0, numero);

    return console.log(letras);
}