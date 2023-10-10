// Classes e Herança

// JavaScript suporta programação orientada a objetos com classes e herança.

class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} faz um barulho.`);
    }
}

class Cachorro extends Animal {
    falar() {
        console.log(`${this.nome} late`);
    }
}

const dog = new Cachorro('Rex');
dog.falar(); // "Rex late."