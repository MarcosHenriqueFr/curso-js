let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []//analise dos dados

function isNumero(n) {
    if(Number(n) >= 1 & Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {//se tem mais de um valor igual na array
        return true
    } else {
        return false
    }
}

function adicionar (){
    if(isNumero(num.value) & !inLista(num.value, valores)){//verifica a validade do num
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)

        valores.push(num.value)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function organizar() {
    valores.sort(function(a, b){return a - b})
}

function soma () {
    var soma = 0
    for (var i = 0;i <= valores.length - 1; i++) {
        soma += Number(valores[i])
    }
    return soma
}

function media () {
    var somaf = soma()
    somaf /= valores.length
    return somaf
}

function finalizar() {

    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let somaf = soma()
        let mediaf = media()
        organizar()

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados!</p>`
        res.innerHTML += `<p>O menor valor adicionado é ${valores[0]}</p>`
        res.innerHTML += `<p>O maior valor adicionado é ${valores[tot-1]}</p>`
        res.innerHTML += `<p>A soma dos valores é: ${somaf}</p>`
        res.innerHTML += `<p>A média dos valores é: ${mediaf}</p>`
    }
}