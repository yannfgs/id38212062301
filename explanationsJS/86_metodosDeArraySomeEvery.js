// Métodos de Array: some e every

// Os métodos `some` e `every` são utilizados para testar elementos em um array. O método `some` retorna `true` se pelo menos um elemento satisfizer a condição, enquanto `every` retorna `true` se todos os elementos satisfizerem a condição.


const array = [1, 2, 3, 4, 5];

const algumMaiorQue3 = array.some(num => num > 3);
console.log(algumMaiorQue3);  // true

const todosMaiorQue0 = array.every(num => num > 0);
console.log(todosMaiorQue0);  // true

const algumMaiorQue6 = array.some(num => num > 6);
console.log(algumMaiorQue6); // false

const todosMenoresQue4 = array.every(num => num < 4);
console.log(todosMenoresQue4); // false