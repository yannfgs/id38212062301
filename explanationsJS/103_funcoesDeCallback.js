// Funções de Callback

// Uma função de callback é uma função passada como argumento para outra função, sendo chamada quando a operação termina, para evitar bloqueio.


function saudacao(nome, callback) {
  console.log(`Olá ${nome}`);
  callback();
}

// A função de callback é chamada após a saudação
saudacao("João", function () {
  console.log("Callback foi chamada");
});
