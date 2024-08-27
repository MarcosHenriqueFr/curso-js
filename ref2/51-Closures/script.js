//CLOSURE = Uma função definida dentro de outra função, a função de dentro tem acesso para as variáveis e escopo da função de fora
// Permite variaveis privadas e manutenção de estado
// Usada frequentemente em frameworks JS: Angular, Vue, React
// Faz elas ficarem privadas e inacessíveis globalmente
// Adiciona segurança para a variavel

function fora(){

    let mensagem = "Bom dia!";

    function dentro(){
        console.log(mensagem);
    }

    dentro();
}

fora();