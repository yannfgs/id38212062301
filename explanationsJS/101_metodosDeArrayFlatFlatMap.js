// Métodos de Array: flat e flatMap

// `flat` retorna um novo array que é uma versão achatada do array original, até a profundidade especificada. flatMap funciona como um map seguido por um flat de profundidade 1.

const arr1 = [1, 2, [3, 4]];

// Aplana o array em um nível
console.log(arr1.flat());  // [1, 2, 3, 4]

const arr2 = [1, 2, 3, 4];

// Mapeia cada elemento para um novo array e depois aplana
console.log(arr2.flatMap(x => [x, x * 2]));  // [1, 2, 2, 4, 3, 6, 4, 8]
