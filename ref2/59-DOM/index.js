//Document object model, organiza a página em forma de árvore
//document.
//Te apresenta uma API para mexer

let claro = true;


function mudarModo(){

    if(claro) {
        document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
        claro = false;
    } else {
        document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
        claro = true;
    }
}