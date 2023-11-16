/*

-- Pergunta 1: O que é uma variável em JavaScript e como você pode declará-la?

Uma variável em JavaScript é usada para armazenar dados que podem ser manipulados durante a execução do programa. Existem três palavras-chave para declarar uma variável: `var`, `let` e `const`.

- `var` é a forma mais antiga e tem um escopo de função.
- `let` tem um escopo de bloco e é geralmente preferível por sua previsibilidade
- `const` também tem escopo de bloco e é usada para declarar constantes, ou seja, seu valor não deve ser alterado.

*/

// Aqui está um exemplo de como declarar variáveis:
let nome = "Yann"; // Declara uma variável chamada 'nome' e atribui a ela a string "Yann"
const ANO = 2023; // Declara uma constante chamada 'ANO' e atribui a ela o valor 2023

console.log(nome); // Exibe "Yann" no console
console.log(ANO); // Exibe 2023 no console