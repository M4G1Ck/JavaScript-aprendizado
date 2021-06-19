let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras; //desestruturacao com array, invertendo os valores de a b c para b c a

console.log(a, b, c);