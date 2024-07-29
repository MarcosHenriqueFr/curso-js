//checked property

const res = document.getElementById("res");
const pay1 = document.getElementById("pay1");
const pay2 = document.getElementById("pay2");
const pay3 = document.getElementById("pay3");
const botao = document.getElementById("meuBotao");
const ccheck = document.getElementById("ccheck");

//inputs do tipo radio tem que ter o mesmo name para selecionar somente 1
botao.onclick = function(){

    if (ccheck.checked) {
        res.innerHTML = `Verificado!<br>`;
        if(pay1.checked) {
            res.innerHTML += `Seu pagamento é por via BISA!`;
        } else if (pay2.checked) {
            res.innerHTML += `Seu pagamento é por via BasterCard!`;
        } else if (pay3.checked) {
            res.innerHTML += `Seu pagamento é por via DAY PAL!`;
        } else {
            res.innerHTML = `Nenhum método de pagamento foi selecionado`;
        }
    } else {
        res.innerHTML = `Por favor, selecione a caixa de verificação`;
    }

}