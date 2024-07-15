
//config da function de adicionar números
function addnum()
{
//config da caixa de input, para receber o valor dela
var txtn = document.getElementById('txtn')
var num = Number(txtn.value)

    var numv = verificar(num)

    if (numv == - 1) {
        alert('[ERRO] Número inválido ou já adicionado')
        return -1
    }

    if(txtn.value.length == 0) {
        alert("[ERRO] Valor não foi inserido")
    } else if (num <= 0 | num > 100) {
        alert('[ERRO] Valor inserido está fora do escopo')
    } else {
        var item = document.createElement('option')
        item.text += `Valor ${num} adicionado`
        tabela.appendChild(item)
        
        guardaritem(num)//chama a função de guardar item
    }
}

//função que verifica se tem mais de um número igual na array
function verificar (num) {
    for (var i = 0; i <= banco.length - 1; i++) {
        if(banco[i] == num) {
            return -1
        }
    }
}

//guarda o nosso valor na última posição da array
function guardaritem(valor) {
    banco.push(valor)
}

//função que organiza a array como numbers e a ordena
function organizar () {
    banco.sort(function (a, b){return a - b})
}

//função que faz a soma de todos os elementos da array
function soma() {
    var soma = 0
    for (var i = 0; i <= banco.length - 1; i++) {
        soma += banco[i]
    }
    return soma
}

//função que faz a média dos elementos
function media () {
    var media = soma()

    media /= banco.length
    return media
}

//config da função de resultado
function dados() {
    res.innerHTML = ``//estava modificando o res com a tabela dentro do html

    organizar()//já que não vai ser utilizada a array inicial
    var somaf = soma()
    var mediaf = media()

    res.innerHTML += `<p>Ao todo, temos ${banco.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi: ${banco[banco.length - 1]}</p>`//pega o tamanho do banco e diminui por 1 para achar o último valor sempre
    res.innerHTML += `<p>O menor valor informado foi: ${banco[0]}</p>`
    res.innerHTML += `<p>Somando todos os valores resulta em: ${somaf}</p>`
    res.innerHTML += `<p>A média dos valores digitados é: ${mediaf}</p>`
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