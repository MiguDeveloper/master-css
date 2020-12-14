const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Filtrar numeros pares
const pares = arreglo.filter((item) => item % 2 === 0);
const suma = pares.reduce((total, current) => total + current);

console.log(pares);
console.log("Suma pares: " + suma);
console.log('Miguel');

setTimeout(()=>{
    console.log('Luego de unos segundos');
}, 1000);