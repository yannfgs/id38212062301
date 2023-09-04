// IIFE (Immediately Invoked Function Expression)

// Uma IIFE é uma função em JavaScript que é executada assim que é definida.

(function () {
    let nome = "João";
    console.log(nome); // "João"
})();

// A variável 'nome' não é acessível fora da IIFE
console.log(typeof nome); // "undefined"