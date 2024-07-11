function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    tab.style.textAlign = 'center'

    if(num.value.length == 0){
        window.alert('[ERRO] Digite um número')
    } else {
        let n = Number(num.value) 
        let c = 1

        tab.innerHTML = ``//limpa e mostra a próxima tabuada

        while (c <= 10) {
            let item = document.createElement('option')//options para o select funcionar, com values
            item.text = `${n} x ${c} = ${n * c}`//modificação do texto do item
            item.value = `tab${c}`//para a identificação dentro do elemento select
            tab.appendChild(item)//criamos o item e adicionamos 
            c++
        }
    }
    
}