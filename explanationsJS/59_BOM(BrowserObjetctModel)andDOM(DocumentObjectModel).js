// BOM (Browser Object Model) e DOM (Document Object Model)

// O BOM permite que o JavaScript "fale" com o navegador, enquanto o DOM permite que o JavaScript "fale" com o HTML. O BOM e o DOM são APIs do navegador, e não fazem parte do JavaScript em si.

// BOM
console.log(window.innerHeight); // Altura da janela do navegador

// DOM
document.querySelector("h1").innerText = "Título Alterado"; // Altera o texto do primeiro h1 da página