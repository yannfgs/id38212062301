// JavaScript e IoT (Internet das Coisas)

// JavaScript não é usado apenas para web, mas também em dispositivos IoT, como com a plataforma Johnny-Five para robótica e IoT.

// Código usando Johnny-Five para ler dados de um sensor de temperatura
const { Board, Thermometer } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
    const termometro = new Thermometer({
        controller: "LM35",
        pin: "A0"
    });

    termometro.on("change", () => {
        console.log(`${termometro.celsius}°C`);
    });
});
