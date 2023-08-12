// Timers

// Os timers permitem executar código após um intervalo de tempo específico ou em intervalos regulares.


// Executa após 2 segundos
setTimeout(() => {
    console.log("2 segundos se passaram");
}, 2000);

// Executa a cada 1 segundo
let contador = 0;
let intervalo = setInterval(() => {
    contador++;
    console.log(contador + " segundos se passaram");
}, 1000);