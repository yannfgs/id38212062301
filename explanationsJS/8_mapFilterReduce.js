// Estes são métodos de array muito úteis que permitem que você processe os elementos de um array de maneira funcional e imutável.

let numeros = [1, 2, 3, 4, 5];

let quadrados = numeros.map(n => n * n); // [1, 4, 9, 16, 25]
console.log(quadrados);

let pares = numeros.filter(n => n % 2 === 0); // [2, 4]
console.log(pares);

let soma = numeros.reduce((total, n) => total + n, 0); // 15
console.log(soma)