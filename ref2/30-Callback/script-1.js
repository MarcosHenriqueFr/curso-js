function soma(callback, x, y){
    let resultado = x + y;
    callback(resultado);
}

function media(resultado){
    resultado /= 2;
    console.log(resultado);//o console.log tem que acontecer na segunda
}

