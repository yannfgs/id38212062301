// Object.entries e Object.values

// Os métodos `Object.entries` e `Object.values` são utilizados para retornar um array com as entradas de um objeto e os valores de um objeto, respectivamente.

const obj = { a: 1, b: 2, c: 3 };

const entradas = Object.entries(obj);
console.log(entradas); // [["a", 1], ["b", 2], ["c", 3]]

const valores = Object.values(obj);
console.log(valores); // [1, 2, 3]