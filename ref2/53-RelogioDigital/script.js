
function attRelogio(){
    const agora = new Date();
    
    //pegou as horas, transformou em string e declarou que seriam duas casas possíveis para o numero
    const horas = agora.getHours().toString().padStart(2, 0);
    const minutos = agora.getMinutes().toString().padStart(2, 0);
    const segundos = agora.getSeconds().toString().padStart(2, 0);
    let meridiano = horas > 12 ? "PM" : "AM";

    let StringTempo = document.getElementById("relogio").innerHTML = `${horas}:${minutos}:${segundos} ${meridiano}`;
    
}

attRelogio();
setInterval(attRelogio, 1000);//mesma lógica do set timeout só que executa várias vezes