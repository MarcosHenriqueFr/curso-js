//Lembre se de colocar export no que for tirar

export const PI = 3.14159;

export function MostrarCircunferencia(raio){
    return 2 * PI * raio;
}

export function MostrarArea(raio){
    return PI * raio * raio;
}

export function MostrarVolume(raio){
    return (4/3) * PI * (raio**3);
}