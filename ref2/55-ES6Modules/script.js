// Um arquivo externo que contêm código reutilizável e pode ser importado em outros arquivos javascript
// Escreve código para diferentes aplicações e pode conter variáveis, classes, funções...
// parte do ecma 2015
// Posso reusar parte de um código complexo
// Lembre de mudar o type do index no HTML

// import objeto from url
import {PI, MostrarArea, MostrarCircunferencia, MostrarVolume} from './mathUtil.js';
//Usando objetos de outro códigos já escritos, sem ser uma linguagem estruturada

const area = MostrarArea(10);
const volume = MostrarVolume(10);
const circunferencia = MostrarCircunferencia(10);