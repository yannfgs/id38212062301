// Error Handling com Try/Catch/Finally

// O bloco try permite testar um bloco de código para erros. O bloco catch permite manipular o erro, e o bloco finally permite executar código, após try e catch, independentemente do resultado. 


try {
    throw new Error('Um erro ocorreu');
} catch (erro) {
    console.error(erro.message);
} finally {
    console.log('Finalizando execução');
}  