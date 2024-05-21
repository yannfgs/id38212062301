// JavaScript e Transpiladores

// Transpiladores como Babel permitem que você use recursos do JavaScript moderno que ainda não são suportados em todos os navegadores.

// O código abaixo usa a sintaxe de classe do ES6, que não é suportada em navegadores mais antigos.

// Babel pode converter isso para uma função construtora que é amplamente suportada.

class MinhaClasse {
  constructor(nome) {
    this.nome = nome;
  }
}

// O código transpilado pelo Babel se parecerá com:
// function MinhaClasse(nome) {
//   this.nome = nome;
// }
