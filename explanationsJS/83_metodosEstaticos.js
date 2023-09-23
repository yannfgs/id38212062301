// Métodos Estáticos

// Métodos estáticos são definidos na própria classe, não em instâncias da classe, e são chamados sem a instanciação da classe.

class MinhaClasse {
    static metodoEstatico() {
        return 'Método estático foi chamado';
    }
}

console.log(MinhaClasse.metodoEstatico());
