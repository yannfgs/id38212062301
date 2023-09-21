// Proxy e Reflect

// O objeto `Proxy` é usado para definir comportamentos personalizados para operações fundamentais (como pesquisa de propriedades). `Reflect` é um objeto embutido que fornece métodos para operações de objeto interceptáveis.

const alvo = {};
const manipulador = {
    get: function (obj, prop) {
        return prop in obj ? obj[prop] : "Valor padrão";
    }
}

const proxy = new Proxy(alvo, manipulador);
console.log(proxy.nome); // "Valor padrão"