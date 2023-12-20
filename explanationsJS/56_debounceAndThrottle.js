// Debounce e Throttle

// Debounce e Throttle são técnicas para controlar a frequência com que uma função é executada.

// Função debounce
function debounce(func, delay) {
  let debounceTimer;
  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), delay);
  };
}

const minhaFuncao = debounce(() => {
  console.log("Função executada após 300ms");
}, 300);

// Função throttle
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const minhaFuncaoThrottle = throttle(() => {
  console.log("Função executada no máximo uma vez a cada 300ms");
}, 300);
