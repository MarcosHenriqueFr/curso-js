var botao = document.querySelector('input#ver')
botao.addEventListener('click', verificaidade)

function verificaidade() {
    var data = new Date()
    var ano = data.getFullYear()
    var selecao = document.querySelector('input#fem').value
    var res = document.querySelector('div#res')
    var txtano = document.getElementById('txtano')
    var idade = ano - Number(txtano.value)

    if (idade >= 18){
        res.innerHTML = `<p>VELHACO ${idade} ${selecao}</p>`
    } else {
        res.innerHTML = `<p>Novin ${idade}</p>`
    }
}
