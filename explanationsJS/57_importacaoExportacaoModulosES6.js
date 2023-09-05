// Importação e Exportação de Módulos (ES6)

// Com ES6, você pode importar e exportar funções, objetos ou valores de um módulo para outro.

// arquivo: modulo.js
export const nome = "João";
export  function dizerOi() {
    console.log("Oi");
}

// arquivo: app.js
import { nome, dizerOi } from './modulo.js';
console.log(nome); // "João"
dizerOi(); // "Oi"