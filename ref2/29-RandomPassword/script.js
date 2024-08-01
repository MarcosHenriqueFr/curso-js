
function gerarSenha(tamanho, maiuscula, minuscula, numero, simbolo){
    const charMaiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charMinuscula = "abcdefghijklmnopqrstuvwxyz";
    const charNumero = "1234567890";
    const charSimbolos = ";/?:><.,^~}{][+=_-|";
    let CaracteresPermitidos = "";
    let senha = "";

    maiuscula ? CaracteresPermitidos += charMaiuscula : CaracteresPermitidos;
    minuscula ? CaracteresPermitidos += charMinuscula : CaracteresPermitidos;
    numero ? CaracteresPermitidos += charNumero : CaracteresPermitidos;
    simbolo ? CaracteresPermitidos += charSimbolos : CaracteresPermitidos;

    let tamanhoCod = CaracteresPermitidos.length;
    if(tamanhoCod === 0){
        return "Não foi selecionado uma característica de senha!";
    } else if(senhaTamanho <= 0) {
        return "Não teve tamanho de senha";
    }
    
    for(let i = 0; i < tamanho; i++){
        senha += CaracteresPermitidos.charAt(Math.floor(Math.random() * tamanhoCod));
    }
    
    return senha;
}

const senhaTamanho = 10;
const IncluiMaiuscula = false;
const IncluiMinuscula = false;
const IncluiNumero = false;
const IncluiSimbolo = false;

const senha = gerarSenha(senhaTamanho, IncluiMaiuscula, IncluiMinuscula, IncluiNumero, IncluiSimbolo);

console.log("Senha gerada: "+senha);