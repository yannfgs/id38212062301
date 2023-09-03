function criarContador() {
    let contador = 0;
    return function () {
        contador++;
        return contador;
    };
}

const meuContador = criarContador();
console.log(meuContador()); // 1
console.log(meuContador()); // 2
