// Optional Chaining (?.)

// O Optional Chaining permite ler o valor de uma propriedade aninhada em um objeto sem ter que validar explicitamente que cada referência no caminho da propriedade é válida.

// Isso é feito adicionando um ponto de interrogação (?.) entre cada nível da cadeia, até o nível desejado. Isso é semelhante ao uso do operador de encadeamento (.) em conjunto com o operador de nulidade (??) para fornecer um valor padrão para propriedades que não existem. No entanto, o operador de encadeamento opcional evita erros de referência, em vez de erros de tipo. Isso significa que, se o item à esquerda do operador de encadeamento opcional for undefined ou null, a expressão inteira será retornada como undefined. Isso também é verdadeiro quando o item à esquerda do operador de encadeamento opcional é uma função que não existe.


const pessoa = { nome: "João", endereco: { cidade: "São Paulo" } };
const cidade = pessoa?.endereco?.cidade;
console.log(cidade); // São Paulo