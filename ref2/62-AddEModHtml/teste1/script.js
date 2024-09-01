//Criação dinâmica de elementos HTML via JS
//1 passo - Criar o elemento
//2 passo - Adicionar atributos e propriedades
//3 passo - Vincular o elemento na árvore DOM

//e talvez remover ele
//append() -> último filho
//prepend() -> primeiro filho
//document.body.insertBefore(novoElemento, elementoatual) -> insere um elemento no meio
//.removeChild(childName) -> remove um elemento implementado de maneira dinâmica 
//selecione o pai e depois o filho

const novoH1 = document.createElement("h1");

novoH1.textContent = "Bom dia!";
novoH1.style.color = "tomato";
novoH1.style.textAlign = "center";

// document.body.append(novoH1);
// document.body.prepend(novoH1);
// document.getElementById("caixa1").prepend(novoH1);
// e no meio?

// document.body.insertBefore(novoH1, document.getElementById("caixa5"));

const caixas = document.querySelectorAll(".caixa");

caixas[3].prepend(novoH1);