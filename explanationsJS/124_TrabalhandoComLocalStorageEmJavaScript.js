// Trabalhando com Local Storage em JavaScript

// Local Storage permite que dados sejam armazenados no navegador e persistam mesmo após o navegador ser fechado.


// Salvando e recuperando dados com Local Storage
localStorage.setItem('meuGato', 'Tom');
const gato = localStorage.getItem('meuGato');
console.log(gato);  // Tom

// Lembre-se que o Local Storage só armazena strings