// Tail Call Optimization (TCO)

// A otimização de chamada de cauda é um recurso em que uma função chamada como a última ação de outra função não cria um novo quadro de pilha, economizando memória.

function fatorial(n, acumulador = 1) {
    if (n === 0) {
        return acumulador;
    }
    return fatorial(n - 1, n * acumulador);
}

// Esta função é otimizada com TCO, pois a última ação é uma chamada de função
console.log(fatorial(5));  // 120