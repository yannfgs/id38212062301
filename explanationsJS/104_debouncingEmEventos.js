// Debouncing em Eventos

// Debouncing é uma prática para minimizar o número de vezes que uma função específica é executada ao longo do tempo, especialmente útil em situações como a digitação do usuário.

let contador = 0;
const inputData = document.getElementById('inputData');

// A função só será chamada 2 segundos após o último evento de input
inputData.addEventListener('input', debounce(function() {
  console.log('Handler de Input:', contador++);
}, 2000));

function debounce(func, delay) {
  let debounceTimer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  }
}