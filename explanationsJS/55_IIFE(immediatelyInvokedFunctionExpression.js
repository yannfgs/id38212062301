(function() {
    let nome = "João";
    console.log(nome); // "João"
  })();
  
  // A variável 'nome' não é acessível fora da IIFE
  console.log(typeof nome); // "undefined"
  