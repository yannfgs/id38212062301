// Encadeamento de Métodos (Method Chaining)

// O encadeamento de métodos permite que você execute várias operações em uma única linha.

const resultado = [1, 2, 3].map(x => x * 2).filter(x => x > 2).reduce((acc, x) => acc + x);
console.log(resultado); // 8