function parimpar (n) {//paramentro formal
    if (n % 2 == 0) {
        return 'par!'//retornos
    } else {
        return 'impar!'//retornos
    }
}

let res = parimpar(3)//chamada e parâmetro real
//ou console.log(parimpar(3))

console.log(res)