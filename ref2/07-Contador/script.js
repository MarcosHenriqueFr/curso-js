const contador = document.getElementById("Contador");
const btnAumentar = document.getElementById("btnAumentar");
const btnDiminuir = document.getElementById("btnDiminuir");
const btnReset = document.getElementById("btnResetar");
const btnx2 = document.getElementById("btnMulti");

let cont = 0;

btnAumentar.onclick = function(){
    cont++;
    contador.textContent = cont;
}

btnDiminuir.onclick = function(){
    cont--;
    contador.textContent = cont;
}

btnReset.onclick = function(){
    cont = 0;
    contador.textContent = cont;
}

btnx2.onclick = function(){
    cont*=2;
    contador.textContent = cont;
}