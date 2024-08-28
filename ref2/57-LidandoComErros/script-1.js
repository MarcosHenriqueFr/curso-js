//user input

try {
    const dividendo = Number(window.prompt("Escreva um dividendo: "));
    const divisor = Number(window.prompt("Escreva um divisor: "));

    const resultado = dividendo / divisor;

    if(dividendo === "" || divisor === ""){
        throw new Error("Não foram apresentados valores!");
    } else if(!Number(resultado)) {
        throw new Error("Os valores apresentados não são números!!");
    }

    if(divisor == 0){
        throw new Error("Você não pode dividir um número por 0!");
    } else {
        console.log(resultado.toFixed(2));
    }
} catch(error) {
    console.error(error);
}

console.log("Fim do programa!");