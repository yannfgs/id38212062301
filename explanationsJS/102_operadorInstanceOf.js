// Operador instanceof

// instanceof verifica se o protótipo de um objeto aparece em qualquer lugar na cadeia de protótipos do outro objeto.

class Pessoa { }
const joao = new Pessoa();

// Verifica se joao é uma instância de Pessoa
console.log(joao instanceof Pessoa);  // true