// Sincrono = código seriado
// Assíncrono = código paralelo => Operações de entrada e saída, Obtenção de Informação de uma fonte, pedidos de rede
// Manipulado com callbacks, promises e async/await
//o settimeout é assíncrono

// Tornando um código sincrono usando callbacks:

function f1(callback){
    setTimeout(() => {
        console.log("Passo1");
        callback();
    }, 3000);
}

function f2(){
    console.log("Passo2");
    console.log("Passo3");
    console.log("Passo4");
}

f1(f2);//agora as linhas mais rápidas são obrigadas a passarem depois da mais devagar