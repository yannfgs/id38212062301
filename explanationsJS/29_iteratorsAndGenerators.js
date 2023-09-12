// Iterators e Generators

// Iterators são objetos que permitem iterar sobre os elementos de uma coleção (como um array ou uma string). Generators são funções especiais que podem pausar a execução e retomar posteriormente, permitindo criar iteradores de maneira mais fácil.

// Iterator
let arr = ['a', 'b', 'c'];
let iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 'a', done: false }
console.log(iterator.next()); // { value: 'b', done: false }
console.log(iterator.next()); // { value: 'c', done: false }
console.log(iterator.next()); // { value: undefined, done: true }


// Generator
function* generator() {
    yield 'a';
    yield 'b';
    yield 'c';
}

let iterator2 = generator();

console.log(iterator2.next()); // { value: 'a', done: false }
console.log(iterator2.next()); // { value: 'b', done: false }
console.log(iterator2.next()); // { value: 'c', done: false }
console.log(iterator2.next()); // { value: undefined, done: true }