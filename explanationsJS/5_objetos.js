// Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor.


let pessoa = {
    nome: "João",
    idade: 25,
    saudacao: function() {
        return "Olá, " + this.nome;
    }
};

console.log(pessoa.nome); // João
console.log(pessoa.saudacao()); // Olá, João