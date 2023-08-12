// Manipulação de Erros com Throw

// Você pode lançar suas próprias exceções em JavaScript usando a palavra-chave `throw`.

function dividir(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero");
    }
    return a / b;
}

try {
    console.log(dividir(10, 0));
} catch (erro) {
    console.log(erro.message); // Divisão por zero"
}