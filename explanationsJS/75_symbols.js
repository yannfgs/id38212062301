// Symbols

// Symbol é um tipo de dado cujas instâncias são únicas e imutáveis. Symbols são frequentemente usados como identificadores de propriedades de objeto para evitar conflitos.

const simbolo = Symbol("descricao");
const objeto = {
  [simbolo]: "Valor do simbolo"
};
console.log(objeto[simbolo]); // "Valor do simbolo"
