//Async - faz a função retornar um promise 
//Await - faz uma função assíncrona esperar por um promise
//Permite escrever um código assincrono de maneira síncrona

function AndarCachorro(){

    return new Promise((resolve, reject) => {//o reject identifica algum erro
        setTimeout(() => {
            const CachorroAndou = false;

            if(CachorroAndou){
                resolve("Andar com o cachorro!");//para me retornar um valor
            } else {
                reject("Você não andou com ele!");
            }
        }, 3000);
    });
}

function LimparCozinha(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Limpou a cozinha");//para me retornar um valor
        }, 2000);
    });
}

function TirarOLixo(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Tirou o lixo!");//para me retornar um valor
        }, 400);
    });
}
//Função async e chama uma await

async function fazerTarefas(){
    //De forma síncrona

    try {
        const ResultadoCachorro = await AndarCachorro();
        console.log(ResultadoCachorro);

        const ResultadoLimpeza = await LimparCozinha();
        console.log(ResultadoLimpeza);

        const ResultadoLixo = await TirarOLixo();
        console.log(ResultadoLixo);

        console.log("Todas as tarefas foram finalizadas!");
    } catch(error) {
        console.error(error);
    }
    
}

fazerTarefas();
