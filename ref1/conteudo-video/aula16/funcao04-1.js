function fatorial(n) {
    let fat = 1//ele já mostra 1 porque não passa pelo laço for

    for(let c = n; c > 1; c--){//de cima para baixo
        fat *= c
    } 
    return fat
}

console.log(fatorial(0))