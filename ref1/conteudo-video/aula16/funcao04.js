function fatorial (fat) {
    var resf = 1
    var fim

    if(fat == 0) {//se fatorial for 0 ele retorna 1
        fim = `O fatorial de ${fat}! é ${resf}`
        return fim
    } else {//senão ele faz o cálculo
        for (var i = 1; i <= fat; i++) {
        resf *= i
        }
        fim = `O fatorial de ${fat}! é ${resf}`
        return fim
    }
}

console.log(fatorial(7))