// Obrigatoriamente tem uma var index para limitar ele

/*
let continue;
console.log(continue);
logo isso aqui não funciona
*/

for(let i = 1; i <= 10; i++) {
    if(i == 3){
        continue;//o continue pula uma iteração, é uma KEY WORD
        //break;
        //se fosse um break; ele saíria imediatamente do loop
    } else {
        console.log(i);
    }
}