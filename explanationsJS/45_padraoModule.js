// Padrão Module

// O padrão Module é usado para criar módulos privados de código, o que pode evitar a contaminação do escopo global e fornecer encapsulamento.

const MeuModulo = (() => {
    let privado = "Variável privada";

    function metodoPrivado() {
        console.log(privado);
    }

    return {
        metodoPublico: () => {
            metodoPrivado();
        }
    };
})();

MeuModulo.metodoPublico(); // "Variável privada"
