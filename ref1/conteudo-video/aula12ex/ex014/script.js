

function carregar (){
var msg = document.querySelector('div#msg')
var img = document.querySelector('#imagem')
var fundo = document.getElementsByTagName('body')[0]
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `<p>Agora são ${hora} horas</p>`

if (hora >= 0 & hora < 12) {
    msg.innerHTML += `<p>Bom dia!!</p>`
    img.src = './imagens/fotomanha.png'
    fundo.style.backgroundColor = 'Burlywood'
} else if (hora >= 12 & hora < 18) {
    msg.innerHTML += `<p>Boa tarde!!</p>`
    img.src = './imagens/fototarde.png'
    fundo.style.backgroundColor = 'darkcyan'
} else {
    msg.innerHTML += `<p>Boa noite!!</p>`
    img.src = './imagens/fotonoite.png'
    fundo.style.backgroundColor = 'darkslategrey'
}
}
