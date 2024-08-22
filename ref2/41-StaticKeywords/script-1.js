
class Usuario{
    static ContadorUsuario = 0;

    constructor(nomeusuario){
        this.nomeusuario = nomeusuario;
        Usuario.ContadorUsuario++;
    }

    static QuantidadeUsuarios(){
        console.log("Existem "+Usuario.ContadorUsuario+" usuários no sistema!");
    }

    DizerOi(){
        console.log("Olá meu nome é "+this.nomeusuario);
    }
}

const Usuario1 = new Usuario("A");
const Usuario2 = new Usuario("B");
const Usuario3 = new Usuario("Banana");

Usuario3.DizerOi();
Usuario.QuantidadeUsuarios();

