// Função para calcular o IMC
function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value); // Obtém o peso do usuário
    const altura = parseFloat(document.getElementById('altura').value) / 100; // Obtém a altura do usuário e converte para metros
    if (!peso || !altura) {
        alert('Por favor, insira valores válidos'); // Alerta se os campos estiverem vazios ou inválidos
        return;
    }
    const imc = (peso / (altura * altura)).toFixed(1); // Calcula o IMC
    document.getElementById('resultado').innerText = `Seu IMC é: ${imc}`; // Exibe o IMC
}