// Classes
// As classes são um recurso do ES6 que fornece uma sintaxe mais clara e simples para criar objetos e lidar com a herança.

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    saudacao(){
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}

let joao = new Pessoa("João", 25);
console.log(joao.saudacao()); // Olá, meu nome é João e eu tenho 25 anos.