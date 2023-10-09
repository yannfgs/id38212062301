// Os módulos ES6 permitem organizar e estruturar o código, facilitando a manutenção e o entendimento do código.

// arquivo: modulo.js
export const nome = "João";

// arquivo: app.js
import { nome } from '.modulo.js';
console.log(nome); // "João"