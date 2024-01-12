// JSON (JavaScript Object Notation)

// JSON é um formato leve para armazenar e transportar dados. É frequentemente usado quando os dados estão sendo enviados de um servidor para um cliente da web.


let pessoa = {
    nome: "João",
    idade: 30
};

let jsonString = JSON.stringify(pessoa); // Converte objeto para string JSON
console.log(jsonString); // '{"nome":"João","idade":30}'

let jsonObject = JSON.parse(jsonString); // Converte string JSON para objeto
console.log(jsonObject.nome); // "João"
