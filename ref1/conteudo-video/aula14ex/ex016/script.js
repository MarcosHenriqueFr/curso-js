function contar () {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 | fim.value.length == 0 | passo.value.length == 0) {
        res.innerHTML = `Dados não foram inseridos....`
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            alert('[ERRO] Faltam dados!! Considerando o PASSO = 1')
            p = 1
        }

        if (i > f) {
            for (let c = i; c >= f; c -= p) {//contagem decrescente
                res.innerHTML += `${c} &#x1F449; `
            } 
        } else {
            for (let c = i; c <= f; c += p) {//contagem crescente
                res.innerHTML += `${c} &#x1F449; `//ou \u{1F449} entre crases
            } 
        }
        
        res.innerHTML += `&#x1F3C1;` 
    }

}