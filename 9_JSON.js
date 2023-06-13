// JSON (JavaScript Object Notation) é um formato de dados que é comumente usado para transferir dados em aplicações web. Em JavaScript, você pode converter entre objetos JavaScript e strings JSON usando `JSON.stringfy` e `JSON.parse`.

let pessoa = {
    nome: "João",
    idade: 25
}

let json = JSON.stringify(pessoa); // converte o objeto em uma string JSON
console.log(json); // '{nome:"João", "idade": 25}'

let objeto = JSON.parse(json); // converte a string JSON de volta em um objeto
console.log(objeto); // { nome: 'João', idade: 25}