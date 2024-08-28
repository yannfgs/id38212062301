// Getters and Setters

let pessoa = {
  primeiroNome: "João",
  ultimoNome: "Silva",
  get nomeCompleto() {
    return this.primeiroNome + " " + this.ultimoNome;
  },
  set nomeCompleto(valor) {
    [this.primeiroNome, this.ultimoNome] = valor.split(" ");
  }
};


console.log(pessoa.nomeCompleto); // "João Silva"
pessoa.nomeCompleto = "Maria Oliveira";
console.log(pessoa.primeiroNome); // "Maria"
console.log(pessoa.ultimoNome); // "Oliveira"
