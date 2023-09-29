let intervalo; // Variável que armazenará o intervalo de tempo
let tempo = 0; // Variável que armazenará o tempo

function iniciar() { // Define a função iniciar
    clearInterval(intervalo); // Limpa o intervalo anterior, se houver
    intervalo = setInterval(function() { // Define um novo intervalo
        tempo++; // Incrementa o tempo
        const horas = Math.floor(tempo / 3600); // Calcula as horas
        const minutos = Math.floor((tempo % 3600) / 60); // Calcula os minutos
        const segundos = tempo % 60; // Calcula os segundos
        document.getElementById('display').innerText = 
            (horas < 10 ? '0' : '') + horas + ':' + // Formata e exibe as horas
            (minutos < 10 ? '0' : '') + minutos + ':' + // Formata e exibe os minutos
            (segundos < 10 ? '0' : '') + segundos; // Formata e exibe os segundos
    }, 1000); // Define o intervalo para 1 segundo
}

function parar() { // Define a função parar
    clearInterval(intervalo); // Limpa o intervalo de tempo
}

function resetar() { // Define a função resetar
    clearInterval(intervalo); // Limpa o intervalo de tempo
    tempo = 0; // Reseta o tempo
    document.getElementById('display').innerText = '00:00:00'; // Reseta o display
}