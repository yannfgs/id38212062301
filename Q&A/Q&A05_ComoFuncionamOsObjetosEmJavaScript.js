/*

Pergunta 5: Como funcionam os objetos em JavaScript?

Em JavaScript, um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto.

*/

// Exemplo de um Objeto:
let pessoa = {
    nome: "Yann",
    idade: 30,
    falar: function() {
        console.log("Olá, meu nome é " + this.nome); // Usa 'this.nome' para acessar a propriedade 'nome' do objeto
    }
};

console.log(pessoa.nome); // Acessa a propriedade 'nome' do objeto 'pessoa'
pessoa.falar(); // Chama o método 'falar' do objeto 'pessoa'


// let pessoa = {…} declara um objeto chamado pessoa.
// nome: "Yann" e idade: 30 são propriedades do objeto.
// falar: function() {…} é um método do objeto.