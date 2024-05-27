// Iterators e Iterables

// Um objeto é um iterable se ele implementa a propriedade @@iterator, o que significa que o objeto (ou um dos objetos até o final de sua cadeia de protótipos) deve ter uma propriedade com uma chave Symbol.iterator.


const array = [1, 2, 3];
const iterador = array[Symbol.iterator]();

console.log(iterador.next()); // { value: 1, done: false }
console.log(iterador.next()); // { value: 2, done: false }
console.log(iterador.next()); // { value: 3, done: false }
console.log(iterador.next()); // { value: undefined, done: true }