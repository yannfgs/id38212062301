// Primeiro, definiremos um módulo para representar um usuário.

// user.ts
export class Usuario { // 'export' torna a classe 'Usuario' disponível para importação em outros arquivos.
    constructor(public nome: string, public email: string) {} // Inidializa as propriedades 'nome' e 'email' através do construtor.
}