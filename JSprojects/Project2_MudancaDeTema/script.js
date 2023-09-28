let temaEscuro = false;

function mudarTema() {
    temaEscuro = !temaEscuro;
    document.body.classList.toggle('tema-escuro', temaEscuro);
}