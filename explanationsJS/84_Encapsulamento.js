// Encapsulamento

// Encapsulamento é um princípio que restringe o acesso direto aos membros de um objeto, o que é uma forma de prevenir acessos acidentais ou indevidos ao código interno.

class Pessoa {
    constructor(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }
}

const p = new Pessoa('João');
console.log(p.nome);  // João
p.nome = 'Maria';
console.log(p.nome);  // Maria
