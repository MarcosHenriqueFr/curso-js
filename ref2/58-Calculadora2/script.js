const display = document.getElementById("display");

function mostrarNaTela(input){
    display.value += input;
}

function limparTela(){
    display.value = "";
}

function calcular(){//Não é recomendável
    try{
    display.value = eval(display.value);//pega uma expressão e mostra o resultado
    } catch(error) {
        display.value = "erro";
    }
}