// Symbols

// Symbols são um novo tipo de dados primitivo introduzido no ES6. Eles são únicos e imutáveis, e são usados principalmente como identificadores para propriedades de objetos.

let sym1 = Symbol();
let sym2 = Symbol('desc'); // com descrição opcional
let sym3 = Symbol('desc');

console.log(sym2 === sym3); // false, todos os symbols são únicos

let obj = {
    [sym2]: 'valor'
};

console.log(obj[sym2]); // 'valor'