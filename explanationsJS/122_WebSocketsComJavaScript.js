// WebSockets com JavaScript

// WebSockets proporcionam uma comunicação bidirecional entre o cliente e o servidor, permitindo interações em tempo real.


// Criando um WebSocket para se comunicar com um servidor
const socket = new WebSocket('ws://localhost:8080');

socket.onopen = function(event) {
    socket.send('Olá, servidor!');
};

socket.onmessage = function(event) {
    console.log('Mensagem recebida do servidor:', event.data);
};