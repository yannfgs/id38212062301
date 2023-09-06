// Destructuring com Valores Padrão

// O Destructuring permite especificar valores padrão para as variáveis que serão extraídas, caso a propriedade não exista no objeto ou array.

const { nome = "Anônimo", idade = 0 } = { nome: "João" };
console.log(nome); // "João"
console.log(idade); // 0
