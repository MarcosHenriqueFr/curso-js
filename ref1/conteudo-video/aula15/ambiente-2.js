let num = [21, 2, 7, 1, 9]

for (let pos in num) {//cada posição em num, para arrays e objetos 
    //o for in é otimizado para isso, só que está usando strings
    console.log(`Vetor ${Number(pos)+1}º: ${num[pos]}`)
}//var contador e nome da array
