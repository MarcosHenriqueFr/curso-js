var botao = document.querySelector('input#botao')
botao.addEventListener('click', tabuada)

res.style.textAlign = 'center'

function tabuada() {
    var res = document.querySelector('div#res')
    var txttab = document.querySelector('input#txttab')
    var tabuada = Number(txttab.value)
    
    res.innerHTML = `<p>Tabuada abaixo: </p>` 
    for (var i = 1; i <= 10; i++) {
        res.innerHTML += `${tabuada} * ${i} = ${tabuada * i} <br>`
    }
}