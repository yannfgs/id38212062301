// Web Workers

// Os Web Workers permitem executar código JavaScript em segundo plano, em uma thread separada da principal, evitando que a interface do usuário fique bloqueada.


// arquivo: worker.js
self.addEventListener('message', function(e) {
    self.postMessage(e.data);
}, false);

// arquivo principal
let worker = new Worker('worker.js');

worker.addEventListener('message', function(e) {
    console.log('Worker disse: ' + e.data);
}, false);

worker.postMessage('Olá, Worker!');