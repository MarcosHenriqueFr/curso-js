const datas = ["20-05-2022", "12-09-1992", "21-08-2005"];

//outro jeito de fazer com var temporaria

let datasFormatadas = datas.map(formatar);
console.log(datasFormatadas);

function formatar(elemento){
    const partes = elemento.split("-");
    let temp = "";

    temp = partes[0];
    partes[0] = partes[partes.length - 1];
    partes[partes.length - 1] = temp;

    return partes.join("-");
}