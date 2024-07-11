let num = [21, 2, 7, 1, 9]

num.sort(function (a, b){return a - b})// - Uma função de comparação
//se a > b, b recebe valor de a -e- a recebe valor de b
//num.sort() - O padrão é lido com strings

console.log(`Vetor: ${num}`)
console.log(`Vetor organizado: ${num}`)