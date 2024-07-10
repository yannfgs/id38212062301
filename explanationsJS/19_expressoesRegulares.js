// As expressões regulares são padrões usados para combinar combinações de caracteres em strings. Em JavaScript, as expressões regulares também são objetos.


let frase = "O gato gosta de caçar ratos.";
let regex = /gato/g;

let resultado = frase.match(regex);
console.log(resultado); // ["gato"]