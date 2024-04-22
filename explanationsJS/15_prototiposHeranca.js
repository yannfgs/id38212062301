// JavaScript é uma linguagem baseada em protótipos, o que significa que a herança é realizada através de uma cadeia de protótipos.

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.saudacao = function () {
    return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
}

let joao = new Pessoa("João", 25);
console.log(joao.saudacao()); // Olá, meu nome é João e eu tenho 25 anos.

