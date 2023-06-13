// Em JavaScript, as funções são cidadãos de primeira classe, o que significa que podem ser passadas como argumentos para outras funções e podem ser retornadas por outras funções. Uma função que aceita outras funções como argumentos ou retorna uma função é conhecida como uma função de alta ordem.

function saudacao(nome) {
    return `Olá, ${nome}!`;
}

function processarPessoa(nome, callback)