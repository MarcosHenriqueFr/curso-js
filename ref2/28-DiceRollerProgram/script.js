function rolarDados(){
    const resultImage = document.getElementById("resultImage");
    const resultValue = document.getElementById("resultValue");
    const textBox = document.getElementById("textBox");
    let value = [];
    let imagens = [];

    if(textBox.value == ""){
        resultValue.textContent = "Insira um valor na caixa de texto";
    } else {
        resultValue.textContent = "";

        for(let i = 0; i < textBox.value; i++){
            value[i] = Math.floor(Math.random() * 6 + 1);
            //dá para colocar a tag toda, ao invés de criar dinamicamente, com appendchil
            imagens.push(`<img src="./dado-img/0${value[i]}.png" alt="Dado ${value[i]}">`);
        }

        resultValue.innerHTML = `Lados: ${value.join(", ")}`;
        resultImage.innerHTML = `Imagens: <br>${imagens.join(" ")}`;
    }
}