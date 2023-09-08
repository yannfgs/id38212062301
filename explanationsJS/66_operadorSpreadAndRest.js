// Spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Rest
function somar(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}
console.log(somar(1, 2, 3, 4)); // 10
