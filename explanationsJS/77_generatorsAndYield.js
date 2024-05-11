// Generators e Yield

// As funções geradoras são um tipo especial de função que pausa sua execução, permitindo que você as retorne posteriormente. O `yield` é usado para pausar e retornar uma função geradora.

function* gerador() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = gerador();
console.log(gen.next()); // { value: 1, done: false }