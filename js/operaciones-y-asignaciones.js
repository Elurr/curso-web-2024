// operaciones y asignaciones

// declaración de variables:
let x;
let y;
let z;
// varias declaraciones en un let
let a, b, c;

// asignación de valor (=)
a = 1;
b = 2;
c = 3;

// asignaciones en una sola línea
b, c = 4;

x = a;
// a partir de ahora x = a = 1
console.log("x = " + x);

y = a + c;
// se puede gaurdar el resultado de operar dos variables en otra variable
console.log("y = " + y);

z = (3 + 5) * b;
// se puede operar juntando valores numéricos con variables numéricas
console.log("z = " + z);

// PEMDAS (Orden de op. matemáticas)
// Paréntesis -> Exponentes -> Mulplicación -> División -> Adición (suma) -> Substracción (resta)

// incrementos y decrementos
x = 32;
x++;
// x = x + 1
// x aumenta en 1, ahora x = 33
console.log("x = " + x);

y = 6;
y--;
// y = y -1
console.log("y = " + y);

z = 3;
z *= 2;
// z = z * 2
// con esto, z se multiplica por 2
console.log("z = " + z);

x = 10;
x /= 2;
// x = x / 2
// se divide entre 2
console.log("x = " + x);

// RESTO (%)
x = 10;
y = 3;

z = x % y;
// esto nos da el resto de la división, NO el resultado
console.log("x % y = " + z)

