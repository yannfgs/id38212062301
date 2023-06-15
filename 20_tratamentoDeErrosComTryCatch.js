// Tratamento de Erros com Try/Catch

// O JavaScript permite que você "capture" erros que ocorrem durante a execução do programa usando a estrutura try/catch.

try {
    let a = 10;
    let b = 0;
    console.log(a / b);
} catch (erro) {
    console.log("Ocorreu um erro: " + erro.message);
}