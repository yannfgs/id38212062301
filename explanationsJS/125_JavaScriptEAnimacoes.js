// JavaScript e Animações

// JavaScript pode ser usado para criar animações interativas na web, utilizando `requestAnimationFrame` para eficiência.


// Animação básica que move um elemento da esquerda para a direita
let pos = 0;
const meuElemento = document.getElementById('meuElemento');

function mover() {
    pos += 1;
    meuElemento.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(mover)/
    }
}

requestAnimationFrame(mover);