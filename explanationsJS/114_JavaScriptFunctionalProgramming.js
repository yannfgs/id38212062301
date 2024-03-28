// JavaScript Functional Programming

// Programação funcional em JavaScript envolve o uso de funções puras, funções de alta ordeem e imutabilidade.

// Função pura
function somar(a, b) {
    return a + b;
}

// Função de alta ordem
function executarEPrintar(funcao, ...args) {
    console.log(funcao(...args));
}

executarEPrintar(somar, 5, 10); // 15