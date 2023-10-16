// Throttling em Eventos

// Throttling é uma técnica que garante que uma função seja chamada no máximo uma vez em um determinado período de tempo, útil para limitar a taxa de execução de uma função.

let contador = 0;
const button = document.getElementById('button');

// A função só será chamada uma vez a cada 2 segundos, mesmo que o evento seja disparado várias vezes
button.addEventListener('click', throttle(function() {
  console.log('Click:', contador++);
}, 2000));

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}