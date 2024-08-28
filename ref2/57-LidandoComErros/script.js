// error = Um objeto que é criado para representar um problema que occoreu
// Acontece frequentemente com inputs de usuário ou estabilização de conexão
// Interrompe a continuação do programa

// Causas comuns: erro de rede, rejeição de promise, erro de segurança

//try {} = fecha um código que provavelmente causará um erro

//catch {} = pega e lida com potenciais erros do try

// finally {} = (opcional) Sempre executa. Usado para limpeza, fechamento

//Quando trabalhamos com arquivos
try {//fez um teste
    console.log("aoba");
} catch (error){//capturou
    console.error(error);//bom pra debug
} finally {
    //LIMPEZA
    console.log("ISSO SEMPRE EXECUTA!");
}
//Assim não interrompe o fluxo

console.log("Você chegou no fim do programa!");