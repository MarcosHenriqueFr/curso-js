//É uma função que é passada como argumento para outra
//Com operações assincronas = Ler um arquivo, pedridos da rede, interagindo com banco de dados.
//O javascript passa direto por isso e tem que chamar para mostrar o resultado

oi(tchau);
// Estamos garantindo que passe outra função e seja chamada depois
// "Quando estiver pronto, me chame"

function oi(callback){//o Js passaria dessa função caso ela fosse muito pesada
    console.log("OI!!");
        callback(saia);
}

function saia(){
    console.log("Saia!")
}

function tchau(callback){
    console.log("Tchau!");
    callback();
}