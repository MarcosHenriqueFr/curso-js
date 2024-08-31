const txtBase = document.getElementsByTagName("input")[0];
const res = document.getElementById("res");

function FazerTriangulo(){
    let base = txtBase.value;
    let partes = '*';
    let linhas = "";

    console.log("Famigerado triangulo retângulo: ");

    for(let i = 0; i < base; i++){//exec baseX
        
        for(let j = 0; j <= i; j++){
            linhas += `${partes} `;
        }
        if(i != base-1){
            linhas += "<br>";
        }
        
    }

    res.innerHTML = linhas;
}

