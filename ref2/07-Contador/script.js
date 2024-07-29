const contador = document.getElementById("Contador");
const btnAumentar = document.getElementById("btnAumentar");
const btnDiminuir = document.getElementById("btnDiminuir");
const btnReset = document.getElementById("btnResetar");
const btnx2 = document.getElementById("btnMulti");

let cont = 0;
// Foi aplicado sem utilizar a identificação pelo event listener e nem diretamente pelo HTML
// Aplica o método e chama a função logo em seguida.
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