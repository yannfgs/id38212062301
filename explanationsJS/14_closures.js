// Um closure é uma função que tem acesso ao escopo pai, mesmo depois que o escopo pai foi fechado.

function fabricaDeSaudacao(saudacao) {
    return function(nome) {
        return `${saudacao}, ${nome}!`;
    }
}

let ola = fabricaDeSaudacao("Olá");
console.log(ola("João")); // Olá, João!

