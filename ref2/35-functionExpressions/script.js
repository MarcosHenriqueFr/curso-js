//Uma forma de definir uma função como valores ou variaveis

const oi = function(){//como se fosse uma function genérica
    console.log("OI");
}

setTimeout(oi, 3000);//dois valores

//Uma função inteira é tratada como um argumento, seguindo a regra da função setTimeout nesse caso, que determina um tempo para existir uma saída
setTimeout(function(){
    console.log("Hello")
}, 3000);