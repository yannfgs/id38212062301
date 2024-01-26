// TypeScript oferece 'parâmetros opcionais' em funções, permitindo que certos argumentos sejam opcionais.


function criarUsuario(nome: string, idade?: number, email?: string): string {
  // Define 'idade' e 'email' como parâmetros opcionais.
  let usuario = `Nome: ${nome}`; // Inicializa a string de usuário com o nome.
  if (idade !== undefined) {
    // Verifica se 'idade' foi fornecida.
    usuario += `, Idade: ${idade}`; // Adiciona 'idade' à string de usuário.
  }
  if (email !== undefined) {
    // Verifica se 'email' foi fornecido.
    usuario += `, Email: ${email}`; // Adiciona 'email' à string de usuário.
  }
  return usuario; // Retorna a string de usuário.
}

console.log(criarUsuario("Ana")); // Exibe: "Nome: Ana".
console.log(criarUsuario("Ana", 30)); // Exibe: "Nome: Ana, Idade: 30".
console.log(criarUsuario("Ana", 30, "ana@example.com")); // Exibe: "Nome: Ana, Idade: 30, Email: ana@example.com".

// 'Parâmetros padrão' são similares aos opcionais, mas têm um valor padrão se nenhum valor for fornecido.

function criarMensagem(
  mensagem: string,
  autor: string = "Desconhecido"
): string {
  // Define 'autor' com um valor padrão.
  return `${mensagem} - ${autor}`; // Retorna a mensagem formatada.
}

console.log(criarMensagem("Olá Mundo")); // Exibe: "Olá Mundo - Desconhecido".
console.log(criarMensagem("Olá Mundo", "Carlos")); // Exibe: "Olá Mundo - Carlos".

// 'Parâmetros rest' permitem representar um número indefinido de argumentos como um array.

function somarNumeros(...numeros: number[]): number {
  // Aceita múltiplos argumentos do tipo 'number' como um array.
  return numeros.reduce((total, num) => total + num, 0); // Soma todos os números no array 'numeros'.
}

console.log(somarNumeros(1, 2, 3, 4)); // Exibe: 10.

// 'Arrow functions' mantêm o contexto de 'this' do código que as contém, diferentemente das funções tradicionais.

class Botao {
  constructor(public texto: string) {} // Define uma propriedade 'texto' e a inicializa através do construtor.
  clique = () => {
    // Define uma 'arrow function' para o método 'clique'.
    console.log(`Botão clicado: ${this.texto}`); // Exibe o texto do botão. 'this' refere-se à instância da classe 'Botao'.
  };
}

const meuBotao = new Botao("Enviar"); // Cria uma nova instância da classe 'Botao' com o texto "Enviar".
meuBotao.clique(); // Chama o método 'clique' e exibe: "Botão clicado: Enviar".
