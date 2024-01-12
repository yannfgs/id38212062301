// O Modelo de Objeto de Documento (DOM) é uma interface de programação para documentos HTML e XML. Ele representa a estrutura do documento e permite que os programas alterem o documento - adicionando, modificando ou excluindo elementos e conteúdo.

// Suponha que temos o seguinte HTML:
// <div id="meuDiv">Olá, mundo!</div>


let div = document.getElementById("meuDiv"); // obtém o elemento com o id "meuDiv"
console.log(div.textContent); // Olá, mundo!

div.textContent = "Olá, JavaScript!"; // altera o conteúdo do div
console.log(div.textContent); // Olá, JavaScript!

