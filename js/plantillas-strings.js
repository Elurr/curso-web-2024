// Qué son plantillas de strings?
// Las plantillas son strings que tienen la posibilidad de contener variables interpoladas
// La sintaxis se hace con la tilde inversa ``
let texto = `hola mundo!`;
console.log(texto);

// admiten comillas dentro del string:
texto = `Me llamo 'Jonathan', pero me dicen "Johnny"`;
console.log(texto);

let string = 'Me llamo Jonathan, pero me dicen "Johnny"';
console.log(string);

// ---- Interpolación de variables ----
// Podemos contruir un string con variables y expresiones las cuales, a la hora de imprimir el string, serán sustituídas por los valores de las variables
let nombre = 'Jonathan';
let edad = 35;

let frase;
// frase = "Hola, me llamo " + nombre + " y tengo " + edad + " años";
// console.log(frase);

// interpolando:
frase = `Hola, me llamo ${nombre} y tengo ${edad} años`;
console.log(frase);

// ejemplo (factura)
let precio = 10;
// 21% = 21/100 = 0.21
let IVA = 0.21; 

// en este caso, la interpolación contiene una expresión, que simplemente una operación matemática (para calcular el precio con IVA) que usa variables
let mensajeTotal = `Total: ${(precio * (1 + IVA)).toFixed(2)}€`;
console.log(mensajeTotal);

// cálculo de precio con IVA
console.log(precio * IVA);
// esto nos da el valor del IVA añadido al precio, pero falta el precio completo
// de ahí que sumemos (precio * 1) que representa el precio original
// así obtenemos el precio original más el valor añadido por el IVA
console.log((precio * 1) + (precio * IVA));

// QUEDA PENDIENTE IMPRIMIR HTML CON PLANTILLAS DE STRING
