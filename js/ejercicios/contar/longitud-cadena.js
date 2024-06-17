let cadena = prompt('Ingrese un texto');

let longitud = cadena.length;
let contador = 0;

// Contar todos los caracteres excepto los espacios en blanco
for (let i = 0; i < longitud; i++) {
    if(cadena[i] != ' ') {
        contador++;
    }
}

alert('La longitud del texto es: ' + contador);