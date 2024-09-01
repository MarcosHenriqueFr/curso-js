//criar, atribuir, ligar
const ol = document.getElementsByTagName("ol")[0];
ol.style.border = "3px solid";
ol.style.fontSize = "2rem";
ol.style.width = "50%";
ol.style.margin = "auto";

const novoItem = document.createElement("li");

novoItem.textContent = "Óleo de coco";
novoItem.style.backgroundColor = "tomato";
novoItem.id = "oleococo";

ol.insertBefore(novoItem, document.getElementById("banana"));
//Use o querySelectorAll caso não tenha um id
// ol.removeChild(novoItem);