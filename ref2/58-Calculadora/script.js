const resultado = document.getElementById("display");
resultado.innerHTML = "";

//Primeiro fazer com que reconheça os botões, e cada um deles faz uma coisa;
ComecarCalculadora();

function ComecarCalculadora(){
    const valores = pegarValores();
    const numeros = valores.array1;
    const simbolos = valores.array2;
    let valorReserva = "";
    let calculo = [];
    let calcSim = [];

    console.log(numeros);
    console.log(simbolos);

    function pegarValores(){
        let valoresNumeros = [];
        let valoresSimbolos = [];

        for(let i = 0; i <= 9; i++){
            valoresNumeros.push(Number(document.getElementsByClassName("numero")[i].innerHTML));
        }
        for(let i = 0; i <= 6; i++){
            valoresSimbolos.push(document.querySelectorAll("button:not(.numero)")[i].innerHTML);
        }
        
        return {array1: valoresNumeros, array2: valoresSimbolos};
    }

    function ArmazenarValor(numero, simbolo){//passa o número e o simbolo

        calculo.push(Number(numero));
        calcSim.push(simbolo);
        console.log(calculo);  
        console.log(calcSim);

        if(calculo.length >= 2){
            Executar();
        }
            
    }

    function Executar(){
        let sinal = calcSim[0];
        calcSim.shift();
        console.log(sinal);
        console.log(calcSim);

        switch(sinal){
            case '+': Soma();
                break;
            case '-': Subtracao();
                break;
            case '*': Multiplicacao();
                break;
            case '/': Divisao();
                break;
            case 'C': Resetar();
                break;
            case '=': Resolver();
                break;
            default: console.error("Foi encontrado um erro na hora da operação!");
        }
        //Uma variavel pega essa valor e recebe o simbolo, 
        //O switch analisa essa variável e o switch executa essa função
        function Soma(){
            calculo = [calculo.reduce(function(acumulador, elemento){
                return acumulador + elemento;
            })];//Tem que transformar em uma array novamente
            console.log(calculo);
        }
    }

    function MostrarNaTela(elemento){
        elemento.onclick = function(){
            if(elemento.innerText != "=" || elemento.innerText != "C"){//verificação inicial
                resultado.innerHTML += elemento.innerText;
            }
            
            //Mostrar quais são os valores e quais são os símbolos
            if(numeros.indexOf(Number(elemento.innerText)) != -1){
                valorReserva += elemento.innerText;

            } else if(simbolos.indexOf(String(elemento.innerText)) != -1){
                if(elemento.innerText != "."){//Guarda e Reseta
                    ArmazenarValor(valorReserva, elemento.innerText);
                    valorReserva = "";
                    resultado.innerHTML = "";
                } else {//Adiciona mais
                    valorReserva += elemento.innerText;
                }
            }
        }
    }


    document.querySelectorAll(".aparecer").forEach(MostrarNaTela);//Tirando o = e o C
}



