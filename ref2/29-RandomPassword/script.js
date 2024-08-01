
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
    if(tamanhoCod == ""){
        return "Não foi selecionado uma característica de senha!";
    }
    
    for(let i = 0; i < tamanho; i++){
        senha += CaracteresPermitidos.charAt(Math.floor(Math.random() * tamanhoCod));
    }
    
    return senha;
}

const senhaTamanho = 15;
const IncluiMaiuscula = false;
const IncluiMinuscula = false;
const IncluiNumero = true;
const IncluiSimbolo = false;

const senha = gerarSenha(senhaTamanho, IncluiMaiuscula, IncluiMinuscula, IncluiNumero, IncluiSimbolo);

console.log(senha);