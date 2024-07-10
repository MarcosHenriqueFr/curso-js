var botao = document.querySelector('input#ver')
botao.addEventListener('click', verificaidade)
//teste seu programa aos poucos
function verificaidade() {
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = document.getElementById('txtano')
    var idade = ano - Number(txtano.value)
    var res = document.querySelector('div#res')
    var img = document.createElement('img')//cria tag img
    img.setAttribute('id', 'foto')//coloca o id foto na tag img

    if (txtano.value.length == 0 | txtano.value > ano) {//não colocar nada, ou ano colocado maior que ano atual, ele tá comparando strings aqui
        window.alert('[ERRO] Verifique os dados novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var genero = ''//começa como uma string vazia
        if (fsex[0].checked) {//verifica se o input foi selecionado, já que eles tem o mesmo name
            genero = 'Homem'
                if (idade >= 0 & idade < 10) {
                    //criança
                    img.setAttribute('src', './imagens/fotobebe-m.png')//atributo html e seu valor
                } else if (idade < 18) {
                    //jovem
                    img.setAttribute('src', './imagens/fotojovem-m.png')
                } else if (idade < 65) {
                    //adulto
                    img.setAttribute('src', './imagens/fotoadulto-m.png')
                } else {
                    //idoso
                    img.setAttribute('src', './imagens/fotoidoso-m.png')
                }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
                if (idade >= 0 & idade < 10) {
                    //criança
                    img.setAttribute('src', './imagens/fotobebe-f.png')
                } else if (idade < 18) {
                    //jovem
                    img.setAttribute('src', './imagens/fotojovem-f.png')
                } else if (idade < 65) {
                    //adulto
                    img.setAttribute('src', './imagens/fotoadulto-f.png')
                } else {
                    //idoso
                    img.setAttribute('src', './imagens/fotoidoso-f.png')
                }
            
        } else {
            window.alert('[ERRO] Não foi indicado o gênero')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>${genero} de ${idade} anos</p>`
        img.style.paddingBottom = '25px'
        res.appendChild(img)//elemento child no elemento res(div#res)
}
}