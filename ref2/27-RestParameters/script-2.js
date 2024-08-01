function CombinarStrings(...strings){
    return strings.join(" ");//junta strings
}

const NomeCompleto = CombinarStrings("Senhor", "Cabeça", "de", "Batata");

console.log(NomeCompleto);