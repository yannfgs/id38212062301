// JavaScript e Padrões de Projeto

// Padrões de projeto são soluções reutilizáveis para problemas comuns em desenvolvimento de software. Um exemplo é o padrão Singleton.
''
// Implementação básica do padrão Singleton em JavaScript
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

const instancia1 = new Singleton();
const instancia2 = new Singleton();

console.log(instancia1 === instancia2); // true