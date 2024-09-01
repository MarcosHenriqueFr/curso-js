//O processo de navegar pela estrutura de um documento HTML usando javascript
//Basicamente o conceito de child, parent e sibling
//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

document.body.style.fontFamily = "Arial, sans-serif";

const elemento = document.getElementById("frutas");

//Têm a mesma lógica
const firstChild = elemento.firstElementChild;
const lastChild = elemento.lastElementChild;

/*
lastChild.style.backgroundColor = "black";
firstChild.style.backgroundColor = "yellow";
*/

const ulElementos = document.querySelectorAll("ul");//entrou nos uls

ulElementos.forEach(ulElementos => {
    const primeiro = ulElementos.firstElementChild;//modificou o primeiro elemento de cada ul
    primeiro.style.backgroundColor = "blue";
});