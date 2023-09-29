document.getElementById('meuFormulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne a submissão padrão do formulário

    const nome = document.getElementById('nome').value; // Obtém o valor do campo nome
    const email = document.getElementById('email').value; // Obtém o valor do campo email
    const senha = document.getElementById('senha').value; // Obtém o valor do campo senha

    if (!nome || !email || !senha) { // Verifica se algum campo está vazio
        alert('Por favor, preencha todos os campos.'); // Alerta se algum campo estiver vazio
    } else {
        alert('Formulário enviado com sucesso!'); // Alerta de sucesso
    }
});