const textBox = document.getElementById("ctext");
const cfradio = document.getElementById("tempcelf");
const fcradio = document.getElementById("tempfcel");
const btn = document.getElementsByTagName("button")[0];
const res = document.getElementById("res");
let temp;

btn.addEventListener("click", Convert);

function Convert(){
    let temp = Number(textBox.value);
    let tempIni = temp;
    
    if(textBox.value === ""){
        window.alert("Nenhum valor foi inserido");
    } else {
        if(cfradio.checked){
            temp = (temp * 1.8) + 32;
            temp = temp.toFixed(2);
            res.innerHTML = `A conversão de <strong>${tempIni}°C</strong> resultou em <strong>${temp}°F</strong>!!`
        } else if (fcradio.checked){
            temp = (temp - 32) / 1.8;
            temp = temp.toFixed(2);
            res.innerHTML = `A conversão de <strong>${tempIni}°F</strong> resultou em <strong>${temp}°C</strong>!!`
        } else {
            window.alert("Nenhuma conversão foi selecionada");
        }
    }
}