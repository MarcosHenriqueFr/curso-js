var agora = new Date()//usar a hora do sistema
var hora = agora.getHours()

console.log(`São ${hora} horas`)

if (hora >= 6 & hora < 12) {
    console.log('Bom dia')
} else if (hora >= 12 & hora < 18) {
    console.log('Boa Tarde')
} else if (hora >= 18 & hora <= 24 | hora < 6 & hora >= 0) {
    console.log('Boa noite')
} else {
    console.log('Hora inválida')
}