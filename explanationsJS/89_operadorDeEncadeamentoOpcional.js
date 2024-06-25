// O operador de encadeamento opcional permite a leitura segura de propriedades aninhadas de um objeto.


const pessoa = { nome: { primeiro: 'João' } };

const sobrenome = pessoa.nome?.sobrenome;
console.log(sobrenome); // undefined