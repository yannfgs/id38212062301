// WeakMap e WeakSet

// `WeakMap` e `WeakSet` são variações de `Map` e `Set` que permitem apenas referências fracas, o que significa que eles não impedem que os objetos referenciados sejam coletados como lixo.

let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "algum valor");
obj = null; // agora o objeto pode ser coletado como lixo

let weakSet = new WeakSet();
let obj2 = {};
weakSet.add(obj2);
obj2 = null; // agora o objeto pode ser coletado como lixo