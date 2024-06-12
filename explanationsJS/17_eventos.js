// Os eventos são ações ou ocorrências que acontecem no sistema que você está programando - o sistema pode ser um site, um sistema operacional, ou qualquer outro tipo de sistema. JavaScript permite que você execute código em resposta a eventos, como cliques do mouse, pressionamentos de teclas, alterações de formulário e muitos outros.


// Suponha que temos o seguinte HTML:
// <button id="meuBotao">Clique em mim</button>

let botao = document.getElementById("meuBotao"); // obtém o elemento com o id "meuBotao"

botao.addEventListener("click", function () {
    alert("Você clicou no botão!");
});

// Neste exemplo estamos adicionando um "ouvinte de eventos" ao botão. Quando o botão é clicado (o evento "click"), a função que passamos para `addEventListener` é executada. Nesse caso, a função exibe um alerta dizendo "Você clicou no botão!".

