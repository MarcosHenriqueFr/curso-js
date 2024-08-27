//Bem similar com uma classe
//Faço tudo virar funções para evitar variáveis globais e diminuição da segurança

function CriarContador(){//Funnção que cria um objeto com uma propriedade privada
    let cont = 0;

    function Aumentar(){
        cont++;
        console.log(`O contador aumentou para ${cont}`);
    }

    function MostrarContador(){
        return cont;
    }

    return {Aumentar:Aumentar, MostrarContador:MostrarContador};
    //retorna objetos que fazem referencias dessas funções
    // Ou somente return {Aumentar, MostrarContador};
}

const contador = CriarContador();

contador.Aumentar();
contador.Aumentar();
console.log(contador.MostrarContador());