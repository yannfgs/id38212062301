// Service Workers

// Service workers atuam como proxies de rede e são úteis para recursos offline, interceptando requisições e gerenciando respostas do cache.


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registrado com sucesso:', registration);
        })
        .catch(erro => {
            console.log('Falha ao registrar o Service Worker:', erro);
        });
}
