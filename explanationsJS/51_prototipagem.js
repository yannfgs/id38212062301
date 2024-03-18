// Prototipagem

// Em JavaScript, cada objeto tem um "protótipo". Se você tentar acessar uma propriedade que não existe no objeto, JavaScript tentará encontrá-la no protótipo do objeto.


function Pessoa(nome) {
  this.nome = nome;
}

Pessoa.prototype.cumprimentar = function () {
  return "Olá, " + this.nome + "!";
};

let joao = new Pessoa("João");
console.log(joao.cumprimentar()); // "Olá, João!"
