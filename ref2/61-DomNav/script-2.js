// Trabalha caso existam identificadores únicos

const elemento = document.getElementById("frutas");
const proxIrmao = elemento.nextElementSibling;//sempre escolhe o próximo irmão seguindo a mesma regra usada para identificar a constante
proxIrmao.style.backgroundColor = "lightblue";

//o nextElementSibling e o previousElementSibling seguem a mesma lógica