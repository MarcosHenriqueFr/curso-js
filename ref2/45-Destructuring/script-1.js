//trocar valores de uma array

const Animais = ["porco", "cabra", "vaca", "cavalo", "ovelha", "boi"];

// Sempre troca o primeiro com o último
[Animais[0], Animais[Animais.length-1]] = [Animais[Animais.length - 1], Animais[0]];

console.log(Animais);