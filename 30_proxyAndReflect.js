// Proxy e Reflect

// O objeto Proxy é usado para definir comportamentos personalizados para operações fundamentais (por exemplo, pesquisa de propriedades, atribuição, enumeração, invocação de função, etc.). O objeto Reflect é usado para manipular objetos e tem métodos correspondentes a quase todos os manipuladores de proxy.

let target = {};
let handler = {
    get: function(target, prop, receiver) {
        console.log(`GET ${prop}`);
        return Reflect.get
    }
}

