// TypeScript introduz 'enums', que permitem a definição de um conjunto de constantes nomeadas.


enum Status { // Define um novo 'enum' chamado 'Status'.
  Ativo, // Primeiro item do 'enum', implicitamente atribuído a 0.
  Inativo, // Segundo item do 'enum', implicitamente atribuído a 1.
  Aguardando, // Terceiro item do 'enum', implicitamente atribuído a 2.
}

let statusAtual: Status = Status.Ativo; // Cria uma variável 'statusAtual' e atribui o 'Status.Ativo' a ela.

// TypeScript também introduz 'interfaces', que são formas de definir a estrutura que os objetos devem seguir.

interface IUsuario {
  // Define uma nova interface chamada 'IUsuario'.
  nome: string; // Exige que 'nome' seja uma propriedade do tipo 'string'.
  idade?: number; // Exige que 'idade' seja uma propriedade do tipo 'number' ou indefinida (opcional).
  imprimirInfo(): void; // Exige um método 'imprimirInfo' que não retorna nada.
}

// 'Classes' em TypeScript podem implementar interfaces para garantir que sigam uma determinada estrutura.
class Usuario implements IUsuario {
  // Define uma nova classe 'Usuario' que implementa a interface 'IUsuario'.
  nome: string; // Define uma propriedade 'nome' conforme exigido pela interface 'IUsuario'.
  idade: number; // Define uma propriedade 'idade' conforme exigido pela interface 'IUsuario'.
  constructor(nome: string, idade: number) {
    // Construtor que aceita 'nome' e 'idade' e inicializa as propriedades da classe.
    this.nome = nome; // Atribui o valor do 'nome' passado ao construtor para a propriedade 'nome' da classe.
    this.idade = idade; // Atribui o valor da 'idade' passada ao construtor para a propriedade 'idade' da classe.
  }
  imprimirInfo(): void {
    // Implementa o método 'imprimirInfo' conforme exigido pela interface 'IUsuario'.
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`); // Exibe as informações do usuário no console.
  }
}

const usuario = new Usuario("Carlos", 25); // Cria um novo objeto 'usuario' da classe 'Usuario'.
usuario.imprimirInfo(); // Chama o método 'imprimirInfo' do objeto 'usuario'.

// 'Type assertions' são uma forma de dizer ao compilador o tipo específico de um valor.
let mensagem: any = "Olá mundo!"; // Define uma variável 'mensagem' com o tipo 'any'.
let tamanhoMensagem: number = (<string>mensagem).length; // Utiliza 'type assertion' para especificar que 'mensagem' é uma 'string' e obter o seu tamanho.
// 'Type assertion' não muda o tipo de dados no tempo de execução, só no tempo de compilação.

console.log(`A mensagem tem ${tamanhoMensagem} caracteres.`); // Exibe o tamanho da 'mensagem' no console.
