// JSON.stringify e JSON.parse

// `JSON.stringify` converte um objeto JavaScript em uma string JSON, enquanto `JSON.parse` faz o oposto, convertendo uma string JSON em um objeto JavaScript.

const obj = { nome: "João", idade: 30 };

// Converte o objeto em uma string JSON
const jsonString = JSON.stringify(obj);
console.log(jsonString);  // '{"nome":"João","idade":30}'

// Converte a string JSON de volta para um objeto
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj);  // { nome: 'João', idade: 30 }
