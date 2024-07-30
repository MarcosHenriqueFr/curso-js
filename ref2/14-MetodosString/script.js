//Métodos de String, para manipulação de dados

let nome = "Marcos Aba";

console.log(nome);
console.log(nome.charAt(0));//Char at index 0
console.log(nome.indexOf("r"));//index of a value in string
console.log(nome.lastIndexOf("a"));//ultima ocorrência de a
console.log(nome.length);//isso é um atributo

nome = "               Marcos Aba";
nome = nome.trim();//limpa espaços antes ou depois de uma string
console.log(nome);

console.log(nome.toUpperCase());//maiúsculo
console.log(nome.toLowerCase());//minúsculo

console.log(nome.repeat(3));//que repete a string 3x
console.log(nome.startsWith("M"));//retorna um boolean e verifica se uma string começa com uma letra, É BOM PARA VALIDAÇÕES.
console.log(nome.endsWith(" "));//termina
console.log(nome.includes("123"));//verifica se tem algum valor dentro, TAMBÉM BOM PARA VALIDAÇÕES

let NumeroTel = "2297827-1893";
NumeroTel = NumeroTel.padStart(12, "0");//determina que vai ter 12 espaços max, e os preenche com 0.
NumeroTel.padEnd(12, "1");//também tem o inserir no fim

let login = NumeroTel.startsWith("0") ? "Não foram inseridos números suficientes" : "Login cadastrado com sucesso";

console.log(login);

console.log(NumeroTel);
NumeroTel = NumeroTel.replace("-", "");//substitui um valor pedido por outro valor. 
console.log(NumeroTel);
