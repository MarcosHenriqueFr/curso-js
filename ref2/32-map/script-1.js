const datas = ["20-05-2022", "12-09-1992", "21-08-2005"];
//vamos inverter as datas


let datasFormatadas = datas.map(formatar);

console.log(datas);
console.log(datasFormatadas);

function formatar(elemento){
    const partes = [];
    
    let primeira = elemento.indexOf("-");
    let segunda = elemento.lastIndexOf("-");

    partes.push(elemento.slice(segunda + 1, elemento.length));//ano
    partes.push(elemento.slice(primeira + 1, segunda));//mês
    partes.push(elemento.slice(0, primeira));//dia

    return partes.join("-");
}