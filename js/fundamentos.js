// Las variables son "cajitas" donde guardamos datos
// Primero debemos declarar una variable
let nombre;

// let significa que tenemos la intención de utilizar una variable dentro del contexto del código actual

// Podemos usar las variables de dos formas. La primera es asignarles un valor y la segunda es llamarlas para leer y tomar su valor actual
// Modificar una variable:
nombre = "Aleja";
nombre = "Nicole";

// Llamar a una variable
console.log(nombre);

// Las variables pueden contener en tres tipos de datos:

// 1- Cadenas de texto
apellido = "Soba";

// Las cadenas de texto son sólo caracteres planos. No se puede operar con ellas, sólo unirlas o separarlas
nombre = "Cristina";

console.log(nombre + " " + apellido);

nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

// Las cadenas de texto se definen por llevar comillas tanto al inicio como al final

// 2- Integers o números íntegros
edad = 35;
// edad = 15;

// Son números operables. Se puede sumar, restar... y hacer todo tipo de cálculos con ellos
// Un ejemplo de que necesitamos guardar un int es que tendremos que calcular datos a partir de éstos:
añoNacimiento = 2024 - edad;
console.log(añoNacimiento);
let mayorEdad;

// saber si la persona es mayor de edad
if (edad >= 18) {
    console.log(nombre + " tiene " + edad + " años. Es mayor de edad");
    mayorEdad = true;
} else {
    // mensaje de que la persona es menor de edad
    console.log(nombre + " es menor de edad. Le quedan " + (18 - edad) + " años para ser mayor.");
    mayorEdad = false;
}

// ejemplo de dato numérico que va en una cadena de texto o string
dni = "543455544";
cp = "48002";
nss = "57458734875474";

// 3- Booleano o estado binario
espesa = true;

// sólo pueden tener dos valores, "true" o "false"
// se generan a partir de comparaciones
if (espesa == true) {
    console.log("Tomar café inmediatamente!");
}

if (mayorEdad) {
    console.log("Puedes entrar al pub");
}

// las tres son iguales
if (mayorEdad != true) {}
if (mayorEdad == false) {}
if (!mayorEdad) {}

