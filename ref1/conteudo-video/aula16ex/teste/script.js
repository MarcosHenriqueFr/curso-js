//config da function de adicionar números
function addnum(){
    //config da caixa de input, para receber o valor dela
    var txtn = document.getElementById('txtn')
    var num = Number(txtn.value)

    var item = document.createElement('option')
    item.text = `Valor ${num} adicionado`
    return tabela.appendChild(item)
}

//config do botão
var btn1 = document.getElementById('btn1')
btn1.addEventListener('click', addnum)

//local da div res
var res = document.getElementById('res')

//localização da tabela do select
var tabela = document.getElementById('tabela')

var dados = [addnum()]
res.innerHTML += `${dados}`