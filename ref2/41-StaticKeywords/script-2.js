const CaixaTexto = document.getElementById("username");
const btnEnvNome = document.getElementById("Submit");
const btnVerificar = document.getElementById("verificar");
const res = document.getElementById("res");
btnEnvNome.addEventListener("click", CriarUsuario)

class Usuario{
    static ContadorUser = 0;

    constructor(nome){
        this.nome = nome;
        Usuario.ContadoUsuario++;
    }
}

const Usuario1 = CriarUsuario();

function CriarUsuario(){
    let nome = String(CaixaTexto.value);
    let user = new Usuario(nome);

    return user.nome;
}

btnVerificar.onclick = function(){
    res.innerHTML = `Tem ${Usuario.ContadorUser} usuários no sistema!<br>O: ${Usuario1}`;
}