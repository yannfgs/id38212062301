// Object.freeze e Object.seal

// Object.freeze e Object.seal são métodos usados para restringir a modificação de objetos.

const obj = { prop: 42 };
Object.freeze(obj);
obj.prop = 33;  // Não altera o valor
console.log(obj.prop);  // 42

const obj2 = { prop: 42 };
Object.seal(obj2);
obj2.prop = 33;  // Altera o valor
console.log(obj2.prop);  // 33
obj2.novaProp = "teste";  // Não adiciona nova propriedade
console.log(obj2.novaProp);  // undefined
