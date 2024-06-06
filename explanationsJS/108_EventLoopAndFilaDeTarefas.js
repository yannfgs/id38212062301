// Event Loop e Fila de Tarefas

// O JavaScript utiliza um modelo de concorrência baseado em um "event loop" para executar código, coletar eventos e executar tarefas de maneira assíncrona.


console.log('Início');
setTimeout(() => {
    console.log('Timeout');
}, 0);
console.log('Fim');
// Saída: Início, Fim, Timeout