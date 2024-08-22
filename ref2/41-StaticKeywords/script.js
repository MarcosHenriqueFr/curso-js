//Define que uma classe possui propriedades ou métodos, e não os objetos que são criados por essa classe
//A classe detem qualquer coisa static, não os objetos
//acontece com a classe Math por exemplo 
//Com a classe também é possível pegar a quantidade de objetos que foram criados a partir dela

class MathUtil{
    static PI = 3.14159265358979323846;

    static MostrarDiametro(raio){
        return raio * 2;
    }

    static MostrarArea(raio){
        return this.PI * raio * raio;
    }

    static MostrarCircunferencia(raio){
        return 2 * this.PI * raio
    }
}

// const MathUtil1 = new MathUtil();lento e não retorna o  valor por causa do static

console.log(MathUtil.PI);//é mais rapido do que fazer tudo
console.log(MathUtil.MostrarDiametro(2));
console.log(MathUtil.MostrarCircunferencia(4).toFixed(2));
console.log(MathUtil.MostrarArea(3).toFixed(2));