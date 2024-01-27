/*

Pergunta 4: O que são funções em JavaScript e como criar uma?

Uma função em JavaScript é um bloco de código projetado para executar uma tarefa específica. Funções são úteis para reutilizar código. Para criar uma função, você usa a palavra-chave `function`, seguida por um nome, parênteses `()`, e um bloco de código `{}`.

*/


function saudar(nome) {
    console.log("Olá, " + nome + "!"); // Concatena e exibe a mensagem com o nome
}

saudar("Yann"); // Chama a função 'saudar' com o argumento "Yann"


// function saudar(nome) {…} define uma função chamada saudar que aceita um parâmetro nome.

// Dentro do bloco de código {}, a função executa uma ação (neste caso, imprime uma saudação no console).