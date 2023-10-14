// Métodos de Array: find e findIndex

// O método find retorna o primeiro elemento que satisfaz a condição especificada, enquanto findIndex retorna o índice do primeiro elemento que satisfaz a condição especificada, enquanto findIndex retorna o índice do primeiro elemento que satisfaz a condição.

const numeros = [5, 12, 8, 130, 44];

const encontrado = numeros.find(elemento => elemento > 10);
console.log(encontrado);  // 12

const indiceEncontrado = numeros.findIndex(elemento => elemento > 10);
console.log(indiceEncontrado);  // 1