const resultado = document.getElementById("display");
const historico = document.getElementById("historico");

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

        if(Number(numero) == ""){
            calculo.pop();
        }

        if(calcSim.length > 1) {//Evita o spam do usuário
            calcSim.shift();
            console.log(calcSim);
        }

        calcSim.push(simbolo);

        console.log(calculo);
        if(calculo.length >= 2){
            Executar();
        }

    }

    function Executar(){
        let sinal = calcSim[0];
        calcSim.shift();
        console.log(sinal);

        if(calcSim.indexOf('=') != -1){//se não tiver ele retorna -1
            calcSim.shift();
        }

        console.log(calcSim);  
        console.log(calcSim);

        historico.innerHTML = calculo.join(sinal) + " = ";

        switch(sinal){
            case '+': Soma();
            resultado.innerHTML = "BOM DIA";
                break;
            case '-': Subtracao();
                break;
            case '*': Multiplicacao();
                break;
            case '/': Divisao();
                break;
            case 'C': Resetar();
                break;
            case '=': 
                Resolver(sinal);
                break;
            default: console.error("Foi encontrado um erro na hora da operação!");
        }

        //Uma variavel pega essa valor e recebe o simbolo, 
        //O switch analisa essa variável e o switch executa essa função
        function Soma(){
            calculo = [
                calculo.reduce(function(acumulador, elemento){
                    return acumulador + elemento;
            })
        ];
            //Tem que transformar em uma array novamente
            console.log(calculo);
            historico.innerHTML += calculo[0];
        }

        function Subtracao(){
            calculo = [
                calculo.reduce(function(acumulador, elemento){
                    return acumulador - elemento;
                })
            ];
            console.log(calculo);
            historico.innerHTML += calculo[0];
        }

        function Divisao(){
            calculo = [
                calculo.reduce(function(acumulador, elemento){
                    return acumulador / elemento;
                })
            ];
            console.log(calculo);
            historico.innerHTML += calculo[0];
        }

        function Multiplicacao(){
            calculo = [
                calculo.reduce(function(acumulador, elemento){
                    return acumulador * elemento;
                })
            ];
            console.log(calculo);
            historico.innerHTML += calculo[0];
        }

        function Resolver(sinal){
            
            switch(sinal){
                case '+': Soma();
                break;
            case '-': Subtracao();
                break;
            case '*': Multiplicacao();
                break;
            case '/': Divisao();
                break;
            }
        }
    }

    function MostrarNaTela(elemento){
        elemento.onclick = function(){//função logo após apertar o botão
            
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

        // Não esquecer de limpar o resultado aqui
        
    }


    document.querySelectorAll(".aparecer").forEach(MostrarNaTela);//Tirando o = e o C
}