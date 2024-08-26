//Elementos de uma array para uma var e uma nova array

const cores = ["preto", "azul", "bege", "branco", "violeta"];

const [primCor, segCor, terCor, ...CoresExtras] = cores;//3 var e uma array

console.log(cores);
console.log(`${primCor}, ${segCor}, ${terCor}\nCores extras: ${CoresExtras}`);
console.log(CoresExtras);