function calcular() { // Define a função calcular
    const num1 = parseFloat(document.getElementById('num1').value); // Obtém o valor do primeiro input e converte para float
    const num2 = parseFloat(document.getElementById('num2').value); // Obtém o valor do segundo input e converte para float

    if (!isNaN(num1) && !isNaN(num2)) { // Verifica se ambos os valores são números
        const soma = num1 + num2; // Soma os dois números
        document.getElementById('resultado').innerText = 'Resultado: ' + soma; // Exibe o resultado
    } else {
        alert('Por favor, insira dois números válidos'); // Alerta o usuário se os valores não forem números
    }
}
