//Um objeto que lida com operações assíncronas 
//Envolva um objeto promise em um codigo assincrono 
//"Promete retornar um valor"
//Pending => resolved or rejected
//new Promise((resolve, reject) => {código assincrono});
//As funções retornam uma nova 
//Method chaining then methods

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

AndarCachorro().then(valor => {console.log(valor); return LimparCozinha();})
                .then(valor => {console.log(valor); return TirarOLixo();})
                .then(valor => {console.log(valor); console.log("terminou todas as tarefas")})
                .catch(error => console.error(error));
                //Só colocar um catch no fim
                //não deixa continuar o código, o que é bom nesse caso

