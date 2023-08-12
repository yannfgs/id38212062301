// Set e Map
// Set e Map são estruturas de dados introduzidas no ES6. Um Set é uma coleção de valores únicos, enquanto um Map é uma coleção de pares chave-valor.

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2); // este valor não será adicionado porque já existe no set
console.log(set.has(1)); // true
console.log(set.size); // 3

let map = new Map();
map.set('nome', 'João');
map.set('idade', 25);
console.log(map.get('nome')); // João
console.log(map.has('idade')); // true
console.log(map.size); // 2