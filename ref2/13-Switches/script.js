/*
let dia = "bananão";
//switch aqui trabalha com valores variáveis
switch(dia){ //funciona como uma "cascata"
    case 1:
        console.log("É Domingo!");
        break;
    case 2:
        console.log("É Segunda!");
        break;
    case 3:
        console.log("É Terça!");
        break;
    case 4:
        console.log("É Quarta!");
        break;
    case 5:
        console.log("É Quinta!");
        break;
    case 6:
        console.log("É Sexta!");
        break;
    case 7:
        console.log("É Sábado!");
        break;
    default:
        console.log(`${dia} não é um dia da semana!`);
}
*/

let NotaProva = "banana";
let aprovacao;
//Se tiver MUITOS IF'S É MELHOR USAR
switch(true) {//analisa de algo pode ser verdadeiro, qualquer coisa
    case NotaProva > 10 || NotaProva < 0:
        aprovacao = `HOUVE UM ERRO. EM ${NotaProva}`;
        break;
    case NotaProva == 10:
        aprovacao = "ÓTIMA NOTA";
        break;
    case NotaProva > 7:
        aprovacao = "PASSOU DE BOAS!!!!!!!!";
        break;
    case NotaProva > 6:
        aprovacao = "Passou de raspão";
        break; 
    case NotaProva >= 0:
        aprovacao = "REPROVADO, ESTUDE MAIS!!!!!!!!!!!";
        break;
    default:
        aprovacao = `Houve algum erro com ${NotaProva}`;
}

console.log(aprovacao);