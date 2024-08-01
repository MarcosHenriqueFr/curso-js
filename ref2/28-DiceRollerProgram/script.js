function rolarDados(){
    const resultImage = document.getElementById("resultImage");
    const resultValue = document.getElementById("resultValue");
    const textBox = document.getElementById("textBox");
    let valores = [];
    let imagens = [];

    if(textBox.value == ""){
        resultValue.textContent = "Insira um valor na caixa de texto";
    } else {
        resultValue.textContent = "";

        for(let i = 0; i < textBox.value; i++){
            valores[i] = Math.floor(Math.random() * 6 + 1);
            //dá para colocar a tag toda, ao invés de criar dinamicamente, com appendchil
            imagens.push(`<img src="./dado-img/0${valores[i]}.png" alt="Dado ${valores[i]}">`);
        }

        resultValue.innerHTML = `Lados: ${valores.join(", ")}`;
        resultImage.innerHTML = `Imagens: <br>${imagens.join(" ")}`;
    }
}