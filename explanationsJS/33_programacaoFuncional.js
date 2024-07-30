// Programação Funcional

// A programação funcional é um paradigma de programação que trata a computação como a avaliação de funções matemáticas e evita mudar o estado e dados mutáveis.


const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;

const calcular = (operacao, a, b) => operacao(a, b);

console.log(calcular(somar, 5, 3)); // 8
console.log(calcular(subtrair, 5, 3)); // 2