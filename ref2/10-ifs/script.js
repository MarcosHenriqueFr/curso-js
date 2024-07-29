/*
let idade = 18;
let licenca = false;

if(idade >= 18) {
    console.log("Você pode ter uma licença!!");
    if(licenca) { 
        console.log("Parabéns pela sua CNH");
    } else {
        console.log("Você vai conseguir algum dia!");
    }
} else {
    console.log("Você não pode ter");
    if(licenca) {
        console.log("DADOS INVÁLIDOS");
    }
    
}
*/
const textIn = document.getElementsByTagName("input")[0];
const botao = document.getElementsByTagName("button")[0];
const res = document.getElementById("res");

botao.onclick = function(){
    let idade = Number(textIn.value);
    
    if(idade > 100) {
        res.textContent = `Tem ${idade} anos. Você é VELHO DEMAIS!!!!!!`;
    } else if (idade == 0) {
        res.textContent = `Tem ${idade} anos. Você acabou de nascer.`;
    } else if (idade < 0) {
        res.textContent = `Tem ${idade} anos. Você nem EXISTE!`;
    } else if (idade >= 18) {
        res.textContent = `Tem ${idade} anos. BEM-VINDO AO SITE!!!!!!!!!`;
    } else {
        res.textContent = `Tem ${idade} anos. Você é menor, SAIA DAQUI!!!!`;
    }
    res.style.textAlign = "center";
    textIn.focus();
    textIn.value = "";
}
