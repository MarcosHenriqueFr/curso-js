//fazer um programa que separe os alunos adultos dos menores de idade

const IdadesAlunos = [15, 16, 16, 17, 18, 19, 21, 23, 57, 62];
let Maiores = IdadesAlunos.filter(MaiorIdade);
let Menores = IdadesAlunos.filter(MenorIdade);//é mais simples já que não precisa de um if, só a condição

console.log(Maiores);
console.log(Menores);

// console.log("[ " + Maiores.join(", ") + " ]\n[ " + Menores.join(", ") + " ]");

function MaiorIdade(elemento){
    return elemento >= 18;
}

function MenorIdade(elemento){
    return elemento < 18;
}