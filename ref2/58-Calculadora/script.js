const resultado = document.getElementById("display");
const historico = document.getElementById("historico");
resultado.innerHTML = "";

//Primeiro fazer com que reconheça os botões, e cada um deles faz uma coisa;

function ComecarCalculadora(){
    const valores = pegarValores();
    const numeros = valores.array1;
    const simbolos = valores.array2;
    let valorReserva = "";
    let calculo = [];
    let calcSim = [];

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
        }

        calcSim.push(simbolo);

        if(calcSim.indexOf("C") !== -1){
            Resetar();
        }

        if(calculo.length >= 2){
            Executar();
        }

    }

    function Resetar(){
        calcSim = [];
        calculo = [];

        historico.innerHTML = "";
    }

    function Executar(){
        let sinal = calcSim[0];
        calcSim.shift();

        if(calcSim.indexOf('=') != -1){//se não tiver ele retorna -1
            calcSim.shift();
        }

        historico.innerHTML = calculo.join(sinal) + " = ";

        switch(sinal){
            case '+': Soma(); 
                break;
            case '-': Subtracao();
                break;
            case '*': Multiplicacao();
                break;
            case '/': Divisao();
                break;
            case '=': 
                Resolver(sinal);
                break;
            default: console.error("Foi encontrado um erro na hora da operação!");
        }
        resultado.innerHTML = calculo[0].toFixed(2);

        //Uma variavel pega essa valor e recebe o simbolo, 
        //O switch analisa essa variável e o switch executa essa função
        function Soma(){
            calculo = [
                calculo.reduce(function(acumulador, elemento){
                    return acumulador + elemento;
            })
        ];
            //Tem que transformar em uma array novamente
            historico.innerHTML += calculo[0];
        }

        function Subtracao(){
            calculo = [
                calculo.reduce(function(acumulador, elemento){
                    return acumulador - elemento;
                })
            ];
            historico.innerHTML += calculo[0];
        }

        function Divisao(){
            calculo = [
                calculo.reduce(function(acumulador, elemento){
                    return acumulador / elemento;
                })
            ];
            historico.innerHTML += calculo[0];
        }

        function Multiplicacao(){
            calculo = [
                calculo.reduce(function(acumulador, elemento){
                    return acumulador * elemento;
                })
            ];
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
                if(elemento.innerText != "."){//Guarda e Reseta, o que não for ponto
                    resultado.innerHTML = "";
                    ArmazenarValor(valorReserva, elemento.innerText);
                    valorReserva = "";
                } else {//Adiciona mais, se for ponto
                    if(valorReserva.charAt(valorReserva.length - 1) != "."){
                        valorReserva += elemento.innerText;
                    } 
                }
            }
        }
        
    }


    document.querySelectorAll(".aparecer").forEach(MostrarNaTela);//Tirando o = e o C
}