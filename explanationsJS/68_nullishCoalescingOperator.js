// Nullish Coalescing Operator (??)

// Este operador retorna o valor à direita quando o valor à esquerda é `null` ou `undefined`. Caso contrário, retorna o valor à esquerda.


const nome = null;
const saudacao = nome ?? "Visitante";
console.log(saudacao); // Visitante