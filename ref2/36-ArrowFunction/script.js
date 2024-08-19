//é bem parecido com as funções genéricas, porém é mais conciso e também tem o mesmo propósito

//declarações globais
let nomeCompleto = "João Pessoa";
let idade = 17;
let altura = 183;

const ola = () => console.log("Olá");//coloca os parâmetros nos parênteses
const saudacao = (nome) => console.log(`Seu nome é: ${nome}`);
//se atentar com erros de input do usuário
const caracteristicas = (idade, altura) => {
    console.log(`Você tem ${idade} anos!\nE ${altura}cm de altura`);
};

ola();
saudacao(nomeCompleto);
caracteristicas(idade, altura);
