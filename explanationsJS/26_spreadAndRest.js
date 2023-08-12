// Spread e Rest
// O operador spread (`...`) é usado para "espalhar" os elementos de um array (ou as propriedades de um objeto) em outro lugar. O operador rest (`...`) é usado para coletar o "resto" dos elementos de um array (ou as propriedades de um objeto) em outra variável.

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]
console.log(arr2);

let [first, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5, 6]