const btn = document.getElementById("btn");
const img = document.getElementById("meuImg");

btn.addEventListener("click", (event) => {

    if(img.style.visibility === "hidden"){
        img.style.visibility = "visible";
        //usamos a propriedade de visibility quando queremos reservar um espaço para a img
        btn.textContent = "Esconder";
    } else {// só checou a  propriedade do css
        btn.textContent = "Mostrar"; 
        img.style.visibility = "hidden";
    }
    
});