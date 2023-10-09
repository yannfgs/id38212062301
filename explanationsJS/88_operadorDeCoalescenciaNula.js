// O operado de coalescência nula retorna o operando da direita quando o operando da esquerda é `null` ou `undefined`.

const valor = null;
const padrao = 42;

const resultado = valor ?? padrao;
console.log(resultado); // 42