// JavaScript fornece muitos métodos úteis para trabalhar com arrays. Aqui estão alguns exemplos:


let numeros = [1, 2, 3, 4, 5];

numeros.push(6); // adiciona um elemento ao final do array
console.log(numeros); // [1, 2, 3, 4, 5, 6]

let ultimo = numeros.pop(); // remove e retorna o último elemento do array
console.log(ultimo); // 6
console.log(numeros); // [1, 2, 3, 4, 5]

let primeiro = numeros.shift(); // remove e retorna o primeiro elemento do array
console.log(primeiro); // 1
console.log(numeros); // [2, 3, 4, 5]

numeros.unshift(1); // adiciona um elemento ao início do array
console.log(numeros); // [1, 2, 3, 4, 5]

