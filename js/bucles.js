console.log('Bucles');

// Los bucles son operaciones que se repiten un número determinado de veces (vueltas)
// Son muy útiles cuando queremos ejecutar el mismo código repetidamente, pero cada vez con un valor diferente

// ---- FOR ----
// Esta declaración crea una expresión con tres valores opcionales:

// 1. Indica el inicio del conteo del bucle (normalmente 0 o 1)

// 2. Indica la condición para que se ejecute el bucle (y por tanto el número de veces)

// 3. Indica la dirección del conteo. Aumenta o disminuye (cuenta atrás)

for (let i = 0; i < 5; i++) {
    // console.log(i);
}

for (let i = 1; i <= 10; i++) {
//    console.log(i)
}

for (let i = 10; i > 0 ; i--) {
    console.log(i);
}

const coches = [
    "Ford Mustang",
    "Audi A1",
    "Mazda Furai",
    "Toyota Corolla",
    "Fiat 500",
    "Mercedes CLK 500",
    "Nissan Almera",
    "Ford Fiesta"
]

// Imprimir este array en el párrafo del HTML
const parrafo = document.getElementById('pTexto');

// texto = coches[0] + "<br>";
// texto += coches[1] + "<br>";
// texto += coches[2] + "<br>";
// texto += coches[3] + "<br>";
// texto += coches[4] + "<br>";
// texto += coches[5] + "<br>";
// texto += coches[6] + "<br>";

// let texto = "<ul>";

// for (let i = 0; i < coches.length; i++) {
//     texto += "<li>" + coches[i] + "</li>";
// }

// texto += "</ul>";

// console.log(texto);

// imprimir lista invertida
let texto = "<ul>";

for (let i = coches.length; i > 0; i--) {
    texto += "<li>" + coches[i - 1] + "</li>";
}

texto += "</ul>";
parrafo.innerHTML = texto;

// imprimir en consola el siguiente ejercicio:
// dado un número, se imprimirá en consola ese número de líneas
// la primera línea tendrá un número, y cada línea sucesiva irá sumando uno más

// Ejemplo: con el número 3 esto es lo que debe aparecer en pantalla:
// 1
// 12
// 123

// let number = 0;

// for (let i = 0; i < number; i++) {
//     console.log(i)
// }

// dado un número, contar hasta ese número desde el 1 e imprimir en pantalla

let numero = 0;

numero = 45;
console.log("Contar hasta " + numero)
for (let i = 1; i <= numero; i++) {
    console.log(i);
}

// Cuenta atrás desde el número
console.log("Cuenta atrás desde " + numero);
for (let i = numero; i > 0; i--) {   
    console.log(i);
}

// Contar hasta el número, sólo pares:
console.log("Contar pares hasta " + numero)
for (let i = 2; i <= numero; i += 2) {
    console.log(i);
}

// Imprimir los múltiplos de un numero
let multiplo;
multiplo = 3;
console.log("Múltiplos del " + multiplo + " hasta el " + numero)
for (let i = multiplo; i <= numero; i += multiplo) {
    console.log(i);
}

// ---- Uso de let en un for ----
let i = 0;

for (let i = 0; i < 5; i++) {
    console.log("i del for: " + i);
}

console.log("i fuera del for " + i);

// las dos variables i, al ser declaradas con let, tienen sólo un alcance de bloque, es decir, que sólo se ven afectadas por el código de su propio bloque

