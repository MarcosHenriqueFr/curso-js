
function attRelogio(){
    const agora = new Date();
    
    const horas = agora.getHours().toString().padStart(2, 0);
    const minutos = agora.getMinutes().toString().padStart(2, 0);
    const segundos = agora.getSeconds().toString().padStart(2, 0);
    let meridiano = horas > 12 ? "PM" : "AM";

    let StringTempo = document.getElementById("relogio").innerHTML = `${horas}:${minutos}:${segundos} ${meridiano}`;
    
}

attRelogio();
setInterval(attRelogio, 1000);//mesma lógica do set Interval