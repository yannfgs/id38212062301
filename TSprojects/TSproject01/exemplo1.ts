// TypeScript permite a criação de 'tipos genéricos', proporcionando maior reutilização do código e manutenção da tipagem.

function retornarArray<T>(elementos: T[]): T[] { // Função genérica que aceita um array de qualquer tipo e retorna um array do mesmo tipo.
    return elementos; // Retorna o array de elementos do tipo genérico T.
}

let numeros = retornarArray<number>([1, 2, 3]); // Utiliza a função genérica com o tipo 'number'.
let strings = retornarArray<string>(["a", "b", "c"]); // Utiliza a função genérica com o tipo "string".

// TypeScript suporta 'tipos de união', permitindo que uma variável tenha mais de um tipo.

let id: string | number; // Define id como uma variável que pode ser tanto 'string' quanto 'number'.
id = "1234"; // Atribui uma string a 'id'.
id = 1234; // Atribui um número a 'id'.

// 'Alias de tipo' em TypeScript permite criar um nome para qualquer tipo.

type StringOuNumero = string | number; // Cria um alias 'StringOuNumero' para o tipo 'string | number'.
let valor: StringOuNumero; // Usa o alias do tipo criado anteriormente.
valor = "123"; // Atribui uma string a 'valor.
valor = 123; // Atribui um número a 'valor'.

