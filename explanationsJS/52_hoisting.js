// Hoisting

// Em JavaScript, as declarações de variáveis (com var) e declarações de funções são movidas para o topo de seu escopo atual, um comportamento conhecido como "hoisting". No entanto, somente a declaração é movida, a inicialização ou atribuição não é movida.

console.log(nome); // undefined (não gera erro)
var nome = "João";

function dizerOi() {
  console.log("Oi");
}

dizerOi(); // "Oi"
