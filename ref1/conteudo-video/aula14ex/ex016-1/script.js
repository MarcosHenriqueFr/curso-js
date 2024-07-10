var botao = document.querySelector('input#botao')
var ativar = botao.addEventListener('click', contador)

function contador(){
    var txtvar = document.querySelector('input#txtvar')
    var txtcond = document.querySelector('input#txtcond')
    var txtinc = document.querySelector('input#txtinc')
    var res = document.querySelector('div#res')

    res.innerHTML = `<p>Contando: </p>`

    var exp = Number(txtvar.value)
    var condicao = Number(txtcond.value)
    var cont = Number(txtinc.value)

    if (cont == 0) {//usar o var.value.length para verificar caso nada foi inserido
        alert('[ERRO] Não foi possivel continuar a operação!')
        cont = 1
    }

    if(exp > condicao) {
        while(exp >= condicao) {
            res.innerHTML += `${exp} &#x1F449; `
            exp-=cont
        }
    } else if (exp <= condicao) {
        while (exp <= condicao) {
            res.innerHTML += `${exp} &#x1F449; `
            exp+=cont
        }
    }
    
    res.innerHTML += `&#x1F3C1;`
}

