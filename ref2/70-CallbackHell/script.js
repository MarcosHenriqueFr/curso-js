//Situação onde callback estão aninhados dentro de outros callbacks até o ponto onde o código fica ilegível. Padrão velho para lidar com funções assíncronas 
//Use promises + async /await para evitar esse caos
//Quando trabalhamos com funções

function tarefa1(callback){
    setTimeout(() => {
        console.log("Tarefa 1 Completa!");
        callback();
    }, 3000);
}

function tarefa2(callback){
    setTimeout(() => {
        console.log("Tarefa 2 Completa!");
        callback();
    }, 2000);
}

function tarefa3(callback){
    setTimeout(() => {
        console.log("Tarefa 3 Completa!");
        callback();
    }, 4000);
}

function tarefa4(callback){
    setTimeout(() => {
        console.log("Tarefa 4 Completa!");
        callback();
    }, 2500);
}

function tarefa5(callback){
    setTimeout(() => {
        console.log("Tarefa 5 Completa!");
        callback();
    }, 1500);
}

tarefa1(() => {
    tarefa2(() => {
        tarefa3(() => {
            tarefa4(() => {
                tarefa5(() => {
                    console.log("Todas as atividades acabaram!");
                });
            });
        });
    });
});