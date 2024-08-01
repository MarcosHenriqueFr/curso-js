let frutas = ["Banana", "Maçã", "Tomate"];
let carnes = ["Alcatra", "Picanha", "Patinho"];

//facilita a manipulação de dados
let comidas = [...frutas, ...carnes, "Ovo", "Leite"];//uma array que junta ambas as arrays em uma só

console.log(comidas);