// Memoização

// A memoização é uma técnica de otimização que consiste em guardar o resultado da execução de uma função para entradas iguais, evitando que a função seja executada novamente com os mesmos parâmetros de entrada.

// A memoização é uma técnica de otimização usada para acelerar programas armazenando os resultados de chamadas de função caras e retornando o resultado em cache quando as mesmas entradas ocorrem novamente.

function memoize(fn) {
    const cache = {};
    return (..args) => {
        const stringifiedArgs = JSON.stringify(args);
        if (cache[stringifiedArgs]) {
            return cache[stringifiedArgs];
        }
        const result = fn(...args);
        cache[stringifiedArgs] = result;
        return result;
    };
}

const fib = n => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
const fibMemoizado = memoize(fib);

console.log(fibMemoizado(40)); // 102334155