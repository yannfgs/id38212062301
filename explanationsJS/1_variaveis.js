// Em JavaScript, você pode declarar variáveis usando as palavras-chave 'var', 'let' ou 'const'. var é a maneira mais antiga de declarar variáveis, mas ainda é usada. let e const são maneiras mais novas de declarar variáveis que foram introduzidas no ES6 (uma versão mais recente do JavaScript).

// let nome = "João";
// O `let` é usado para declarar variáveis que podem ter seus valores alterados durante a execução do código. Ele foi introduzido no ECMAScript 6 (também conhecido como ES6 e ECMAScript 2015) e serve como uma alternativa mais segura ao uso de `var`, que era o meio tradicional de declarar variáveis em JavaScript.

// Características:
// - Permite reatribuição de valores
// - Tem escopo de bloco. Isso significa que uma variávei definida dentro de um bloco (por exemplo, dentro de um loop ou uma condição) não será acessível fora desse bloco.

// Exemplo:
let nome = "Pedro";
console.log(nome); // Saída: Pedro

nome = "Ana";
console.log(nome); // Saída: Ana

for (let i = 0; i < 5; i++) {
    console.log(i); // Saída: 0, 1, 2, 3, 4
}
// console.log(i); Erro! i não está definido fora do bloco for.

// ---------------------------------------------------------------------- //


// const idade = 25;

const pi = 3.14159;
console.log(pi); // Saída: 3.14159

// pi = 3.14; // Erro! Não é possível atribuir valor a uma constante.

const cores = ["vermelho", "azul"];
console.log(cores); // Saída: ["vermelho", "azul"]

const.push("verde"); // Isso é permitido porque estamos modificando o conteúdo do array e não a referência do array.
console.log(cores); // Saída: ["vermelho", "azul", "verde"]

// cores = ["amarelo", "roxo"]; // Erro! Não é possível atribuir a referência de uma constante.