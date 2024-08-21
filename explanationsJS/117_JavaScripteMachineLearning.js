// JavaScript e Machine Learning


// Com bibliotecas como TensorFlow.js, é possível executar modelos de machine learning no navegador ou em Node.js.

// Exemplo usando TensorFlow.js

async function executarModelo() {
    const modelo = await tf.loadLayersModel('https://.../modelo/model.json');
    const predicao = modelo.predict(tf.tensor2d([5], [1, 1]));
    predicao.print();
}

executarModelo();
