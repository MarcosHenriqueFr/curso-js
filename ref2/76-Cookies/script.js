//Pequeno arquivo de texto que é armazenado no computador, usado para lembrar de informações sobre o usuário salvos em pares name=value

//Posso criar valores para ele, e uma data de expiração
const primTexto = document.querySelector("#primTexto");
const ultTexto = document.querySelector("#ultTexto");
const enviar = document.querySelector("#submit");
const cokbtn = document.querySelector("#cookiesbtn");

enviar.addEventListener("click", () => {
    deletarCookie("primNome");
    deletarCookie("ultNome");

    fazerCookie("primNome", primTexto.value, 30);
    fazerCookie("ultNome", ultTexto.value, 30);
});

cokbtn.addEventListener("click", () => {
    primTexto.value = MostrarCookie("primNome");
    ultTexto.value = MostrarCookie("ultNome");
});

function fazerCookie(nome, valor, diasVida){
    const data = new Date();
    data.setTime(data.getTime() + (diasVida * 24 * 60 * 60 * 1000));//Calculo pra dias
    let expirar = "expires=" + data.toUTCString();
    document.cookie = `${nome}=${valor}; ${expirar}; path=/`;
}

function deletarCookie(nome){
    fazerCookie(nome, null, null);
}

function MostrarCookie(nome){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let resultado = null;

    cArray.forEach(elemento => {
        if(elemento.indexOf(nome) === 0){
            resultado = elemento.substring(nome.length + 1)
        }
    })
    return resultado;
}