// Coercion e Truthy/Falsy

// Coercion é a conversão automática ou implícita de valores de um tipo de dado para outro (como string para número). Valores truthy são valores que se traduzem em verdadeiro em um contexto booleano, e falsy são aqueles que se traduzem em falso.


console.log(1 + "2"); // "12" (coerção de número para string)
console.log(1 + "-2"); // -1 (coerção de string para número)

if (" ") {
    console.log("Espaços são truthy");
} else {
    console.log("Espaços são falsy");
}