// Local Storage e Session Storage

// O Local Storage e o Session Storage são mecanismos de armazenamento na Web que permitem salvar pares chave-valor em um navegador da web.

// Local Storage
localStorage.setItem('nome', 'João');
console.log(localStorage.getItem('nome')); // João
localStorage.removeItem('nome');

// Session Storage
sessionStorage.setItem('idade', '25');
console.log(sessionStorage.getItem('idade')); // 25
sessionStorage.removeItem('idade');