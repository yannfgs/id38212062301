// Métodos de String: includes, startsWith, endsWith

// Estes métodos são utilizados para verificar a presença de uma substring dentro de uma string.

const texto = 'Olá, mundo!';

console.log(texto.includes('Olá')); // true
console.log(texto.startsWith('Olá')); // true
console.log(texto.endsWith('!')); // true
console.log(texto.includes('Oi')); // false
console.log(texto.startsWith('Oie')); // false
console.log(texto.endsWith('.')); // false