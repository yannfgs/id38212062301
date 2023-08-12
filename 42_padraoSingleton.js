// Padrão Singleton

// O padrão Singleton garante que uma classe tenha apenas uma instância e fornece um ponto global para acessá-la.

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