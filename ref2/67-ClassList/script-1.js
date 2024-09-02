//Propriedade no js usada para interagir com a list de classes de um elemento(CSS)
//Permite colocar classes reutilizáveis em vários elementos pela página
//add()
//remove()
//toggle(remove se tem, adiciona se não tem)
//replace()
//contains()

const btn = document.getElementById("btn");

// btn.classList = "hover";//Sempre usar o .classList para colocar uma classe
// btn.classList.remove("aplicado");

/* 
btn.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});

btn.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});
*/

// Posso REUSAR várias classes
btn.classList.add("aplicado");

btn.addEventListener("click", event => {

    if(event.target.classList.contains("aplicado")){//retorna um boolean
        event.target.classList.replace("aplicado", "desaplicado");
    } else {
        event.target.classList.replace("desaplicado", "aplicado");
    }
});