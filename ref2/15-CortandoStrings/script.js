//Vamos usar o método string.slice(start, end); Também entram números negativos, e começa de trás para frente.

const nome = "Marcos Henrique";
console.log(nome);

let vazio = nome.indexOf(" ");//identifica o espaço vazio

//o primeiro nome continua mesmo com mais nomes.
let PriNome = nome.slice(0, vazio);//0 já que sempre é o primeiro
console.log(`Seu primeiro nome é: ${PriNome}`);

let UltNome = nome.slice(vazio + 1);//retorna 6 e dá +1 para retirar o espaço.
console.log(`Seu último nome é: ${UltNome}`);

//Parte que localiza o nome do usuário
const email = "Marcos92@gmail.com";
console.log(email);

let endUser = email.indexOf("@");

let UserName = email.slice(0, endUser);
console.log(`Olá, ${UserName}!`);
