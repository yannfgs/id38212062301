// Template Literals e Tagged Templates

// Template literals permitem a incorporação de expressões e a criação de strings multilinha. Tagged templates permitem que você analise as strings de template com uma função.

// Template literals são delimitados por crases (``) em vez de aspas simples ou duplas. Eles podem conter espaços reservados, que são expressões delimitadas por chaves (${expressão}). O valor de uma expressão de espaço reservado é inserido na string resultante. As expressões de espaço reservado podem ser literais de string, variáveis, expressões aritméticas, chamadas de função e muito mais.

const nome = "João";
const saudacao = `Olá ${nome}, como você está?`;

function tag(strings, ...valores) {
    console.log(strings);
    console.log(valores);
}

tag`Olá ${nome}, como você está?`;
