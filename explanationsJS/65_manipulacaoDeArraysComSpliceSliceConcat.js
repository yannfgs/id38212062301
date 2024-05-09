// Manipulação de Arrays com Splice, Slice e Concat

// Esses métodos permitem manipular arrays de maneira eficaz, seja para adicionar, remover ou copiar elementos. O método splice() remove elementos de um array e, opcionalmente, os substitui por novos elementos. 

// O método slice() retorna uma cópia de parte de um array, começando pelo índice inicial até o índice final (ou até o final do array). O método concat() retorna um novo array composto por este array unido com outros arrays e/ou valores. O método concat() não altera o array original, mas retorna um novo array. O método concat() pode ser usado para mesclar dois ou mais arrays. O método concat() pode ser usado para mesclar um array com valores. O método concat() pode ser usado para mesclar um array com valores e outros arrays. O método concat() pode ser usado para mesclar um array com outros arrays.

const arr = [1, 2, 3, 4, 5];

arr.splice(1, 2); // remove elementos começando do índice 1 e remove 2 elementos

const novoArr = arr.slice(1, 3); // cria um novo array a partir do índice 1 até o índice 3 (não incluso)

const concatenado = arr.concat([6, 7, 8]); // concatena dois arrays
