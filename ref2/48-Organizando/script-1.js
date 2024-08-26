const pessoas = [{nome: "Maria Eduarda", idade: 25, nota: 8.9},
                 {nome: "Calos Magno", idade: 32, nota: 6.5},
                 {nome: "Enzo", idade: 21, nota: 4.2}];

// pessoas.sort((a, b) => b.nota - a.nota);//maior para menor nota
pessoas.sort((a, b) => a.nome.localeCompare(b.nome));// Ordem lexicografica

console.log(pessoas);