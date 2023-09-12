// Arrow Functions

// Arrow functions são uma nova sintaxe para funções introduzidas no ES6. Elas são especialmente úteis para funções de callback e funções que você dseja ter um `this` vinculado ao contexto de criação.

let arr = [1, 2, 3, 4, 5];
let squares = arr.map(x => x * x);
console.log(squares); // [1, 4, 9, 16, 25]



// As Arrow Functions são uma forma simplificada e mais concisa de escrever funções em JavaScript. Elas foram introduzidas na versão ES6 da linguagem e oferecem uma sintaxe mais enxuta e legível para a criação de funções anônimas.

// Ao invés de utilizar a palavra-chave "function", as Arrow Functions utilizam uma seta (=>) para indicar a definição da função. Além disso, elas possuem algumas características especiais, como a ausência de um objeto "this" próprio e a capacidade de retornar valores de forma implícita.

// As Arrow Functions são particularmente úteis em situações onde é necessário criar funções curtas e simples, como no caso de callbacks ou de funções que recebem apenas um parâmetro. No entanto, é importante lembrar que elas não são adequadas para todas as situações e que ainda existem casos em que a sintaxe tradicional de criação de funções é mais apropriada.