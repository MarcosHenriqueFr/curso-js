//Onde uma variável é reconhecida e acessível, local vs global, a LOCAL tem mais hierarquia que a global

let y = 3;
//Qualquer um tem acesso, não é recomendável em grandes programas, já que pode ocorrer conflitos de nomes.

function func2(){//elas não tem acesso a outras funções
    let x = 1;//essa tem o escopo local
    console.log(x);// x = 1
}
function func1(){
    console.log(x);// x = 3
}