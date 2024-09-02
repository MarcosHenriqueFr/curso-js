let botoes = document.querySelectorAll(".btns");

botoes.forEach(botao => {
    botao.classList.add("aplicado");

    botao.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });

    botao.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });

    botao.addEventListener("click", event => {

        if(event.target.classList.contains("desaplicado")){
            event.target.textContent += "🤬";
        } else {
           event.target.classList.replace("aplicado", "desaplicado"); 
        }
    });
});
