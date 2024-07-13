
//config da function de adicionar números
function addnum()
{
//config da caixa de input, para receber o valor dela
var txtn = document.getElementById('txtn')
var num = Number(txtn.value)

    if(txtn.value.length == 0) {
        alert("[ERRO] Valor não foi inserido")
    } else if (num < 0 | num > 100) {
        alert('[ERRO] Valor inserido está fora do escopo')
    } else {
        var item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        tabela.appendChild(item)
        
        guardaritem(num)//chama a função de guardar item
    }
}

//guarda o nosso valor na última posição da array
function guardaritem(valor) {
    banco.push(valor)
}

//config da função de resultado
function dados() {
    res.innerHTML += `<p>${banco}</p>`
}

//config da array que guarda os valores
var banco = []

//config dos botões
var btn1 = document.getElementById('btn1')
btn1.addEventListener('click', addnum)

var btn2 = document.getElementById('btn2')
btn2.addEventListener('click', dados)

//local da div res
var res = document.getElementById('res')

//local da tabela do select
var tabela = document.getElementById('tabela')

