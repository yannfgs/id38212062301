// Padrão Factory

//  O padrão Factory é um padrão de design que permite criar objetos sem especificar a classe exata do objeto que será criado.

class Gato {
    falar() {
        return "Miau!";
    }
}

class Cachorro {
    falar() {
        return "Ai ai!";
    }
}

function AnimalFactory(tipo) {
    switch (tipo) {
        case "Gato":
            return new Gato();
        case "Cachorro":
            return new (Cachorro);
        default:
            throw new Error("Tipo de animal desconhecido");
    }
}