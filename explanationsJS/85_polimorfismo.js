// Polimorfismo

// Polimorfismo é um princípio pelo qual classes diferentes podem ser utilizadas através de uma mesma interface.

class Animal {
    fazerSom() {
      return 'Som genérico';
    }
  }
  
  class Cachorro extends Animal {
    fazerSom() {
      return 'Latido';
    }
  }
  
  class Gato extends Animal {
    fazerSom() {
      return 'Miado';
    }
  }
  
  const animais = [new Cachorro(), new Gato()];
  animais.forEach(animal => console.log(animal.fazerSom()));  