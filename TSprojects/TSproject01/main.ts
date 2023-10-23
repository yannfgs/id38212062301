// TypeScript é um superconjunto de JavaScript que adiciona tipagem estática.
// Isso significa que, enquanto em JavaScript as variáveis podem ter qualquer tipo, em TypeScript você pode especificar tipos.

let usuario: string = "João"; // Define uma variável 'usuario' do tipo 'string'.
let idade: number = 30; // Define uma variável 'idade' do tipo 'number'.
let estaAtivo: boolean = true; // Define uma variável 'estaAtivo' do tipo 'boolean'.

// As funções também podem ter tipos definidos para os parâmetros e o valor de retorno.
function somar(num1: number, num2: number): number {
    return num1 + num2; // Retorna a soma de 'num1' e 'num2', que são ambos do tipo 'number'.
}

// Tentativas de atribuir um valor de um tipo errado resultarão em erro no momento da compilação.
// usuario = 123; // Isso causaria um erro porque 'usuario' é do tipo 'string' e não 'number'.

console.log(somar(5, 10)); // Exibe o resultado da função 'somar' no console.

// TypeScript suporta conceitos de orientação a objetos como classes, interfaces, etc.
class Pessoa {
    nome: string; // Propriedade 'nome' do tipo 'string' na classe 'Pessoa'.
    constructor(nome: string) { // Construtor da classe 'Pessoa' que aceita um parâmetro 'nome' do tipo 'string'.
        this.nome = nome; // Atribui o valor do parâmetro 'nome' à propriedade 'nome' da classe.
    }
}

// Instancia um novo objeto da classe 'Pessoa'.
let pessoa = new Pessoa("Maria");
console.log(pessoa.nome); // Exibe a propriedade 'nome' do objeto 'pessoa' no console.
