// Event Loop e Concorrência

// JavScript tem um modelo de concorrência baseado em um "event loop", que é responsável por executar o código, coletar e processar eventos e executar tarefas enfileiradas. O event loop permite que JavaScript seja executado em um único thread, e é responsável pela "pintura" da tela, por exemplo.

console.log("Início");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("Fim");

// Saída:
// Início
// Fim
// Promise
// Timeout