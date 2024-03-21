// Programação Orientada a Aspectos (AOP)

// AOP é um paradigma de programação que permite a separação de preocupações transversais em programas, como logging, segurança, etc.


function executar(funcao, ...parametros) {
    console.log(`Executando ${funcao.name}`);
    return funcao(...parametros);
}

function somar(a, b) {
    return a + b;
}

const resultado = executar(somar, 5, 3);
console.log(`Resultado: ${resultado}`);