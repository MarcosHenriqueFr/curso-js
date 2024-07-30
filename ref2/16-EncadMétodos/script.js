//Um programa que pega o nome do usuário e coloca a primeira letra em maiúsculo e as restantes em minúsculo. Vamos manipular uma string, logo, vamos utilizar vários métodos de string.
//Funciona como um combo.
let usuario = window.prompt("Coloque o seu nome: ");

usuario = usuario.trim().charAt(0).toUpperCase() + usuario.trim().slice(1).toLowerCase();
console.log(usuario);//organiza tudo e encadeia os métodos.