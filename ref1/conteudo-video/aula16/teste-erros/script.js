function paridade(num) {
    if(num % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

var txtp = document.getElementById('txtp')
var num = Number(txtp.value)
var resultado = document.getElementById('res')
var res = btn.addEventListener('click', paridade(num))

var btn = document.getElementById('btn')


resultado.innerHTML = `<p>${res}</p>`