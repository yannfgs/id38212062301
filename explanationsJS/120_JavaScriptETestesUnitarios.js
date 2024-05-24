// Exemplo usando Jest para testar uma função de soma
// Este código deve estar em um arquivo de teste Jest, como sum.test.js

gi
const sum = (a, b) => a + b;

test('soma de 1 + 2 deve resultar em 3', () => {
    expect(sum(1, 2)).toBe(3);
})