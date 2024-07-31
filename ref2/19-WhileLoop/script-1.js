//repete algo enquanto condição for verdade

let username = "";

/*PRÉ
while(username === "" || username === null){
    username = window.prompt(`Coloque o seu nome: `);//para ter uma pausa
}
*/

//PÓS, não precisa de definição de username, já que ele sempre faz primeiro
do {
    username = window.prompt(`Coloque o seu nome: `);//para ter uma pausa
} while(username === "" || username === null);

document.getElementById("meuh1").innerText = `Olá ${username}!!`;