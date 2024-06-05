// WebAssembly

// WebAssembly é um formato de código binário para programas executáveis que permite executar código de alto desempenho no navegador.


// Exemplo simples de carregar um módulo WebAssembly.
async function carregarWebAssembly() {
    const resposta = await fetch('meu_modulo.wasm');
    const buffer = await resposta.arrayBuffer();
    const modulo = await WebAssembly.compile(buffer);
    return new WebAssembly.Instance(modulo);
}

carregarWebAssembly().then(instance => {
    console.log(instance.exports.minhaFuncao());
});
