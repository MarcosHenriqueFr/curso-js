// são objetos que contem tempos e datas, eles podem ser modificados e formatados.

// data(ano, mes, dia, hora, minuto, segundo e milisegundo)
const data = new Date();
const ano = data.getFullYear();
const mes = data.getMonth();
const dia = data.getDate();

console.log(ano);
console.log(mes);
console.log(dia);

console.log(dia + "/" + Number(mes+1) + "/" + ano);