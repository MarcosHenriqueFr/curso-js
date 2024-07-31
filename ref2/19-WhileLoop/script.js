let logado = false;
let usuario;
let senha;

while(!logado){
    usuario = window.prompt("Qual seu username: ");
    senha = window.prompt("Qual a sua senha: ");

    if(usuario === "Marcos C" && senha === "123"){
        console.log(`Seja bem-vindo ${usuario}`);
        logado = true;
    } else {
        console.log("Algo deu errado! :(");
    }
}