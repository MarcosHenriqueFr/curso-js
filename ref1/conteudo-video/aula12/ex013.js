var agora = new Date()
var diasem = agora.getDay()

/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado
*/
console.log(diasem)

switch (diasem) {
    case 0: 
        console.log('Hoje é Domingo')
        break
    case 1: 
        console.log('Hoje é segunda')
        break
    case 2: 
        console.log('Hoje é terça')
        break
    case 3: 
        console.log('Hoje é quarta')
        break
    case 4: 
        console.log('Hoje é quinta')
        break
    case 5: 
        console.log('Hoje é sexta')
        break
    case 6: 
        console.log('Hoje é sábado')
        break
    default: 
        console.log('Dia inválido')
        break
}