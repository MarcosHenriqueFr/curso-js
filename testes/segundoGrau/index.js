const a = 10;
const b = 23;
const c = -17;

segundoGrau(a, b, c);

function segundoGrau(a, b, c){
    let x = [];

    let delta = (b**2) - 4 * a * c;
    let xlinha1 = (-b + Math.sqrt(delta)) / 2 * a;
    let xlinha2 = (-b - Math.sqrt(delta)) / 2 * a;
    x.push(Number(xlinha1.toFixed(2)));
    x.push(Number(xlinha2.toFixed(2)));

    return console.log(`Os valores de x são: \n1° X: ${x[0]}\n2° X: ${x[1]}`);
}