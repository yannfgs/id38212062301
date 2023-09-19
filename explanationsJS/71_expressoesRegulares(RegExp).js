// Expressões Regulares (RegExp)

// As expressões regulares são padrões utilizados para encontrar uma determinada combinação de caracteres dentro de uma string.

const regex = /ab+c/;
const str = 'abc';
const resultado = regex.test(str);
console.log(resultado); // true