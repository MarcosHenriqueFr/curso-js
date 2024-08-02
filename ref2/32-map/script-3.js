const datas = ["20-05-2022", "12-09-1992", "21-08-2005"];

let datasFormatadas = datas.map(formatar);//aqui o callback
console.log(...datasFormatadas);

function formatar(elemento){
    const partes = elemento.split("-");//separa cada vez que aparece um -
    return `${partes[1]}/${partes[2]}/${partes[0]}`;
}

//o map é usado quando queremos preservar a array original.