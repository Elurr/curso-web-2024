// Un número es primo cuando sólo es divisible entre 1 y sí mismo
// por ejemplo el 7, el 19, 23

// el 7 no se puede dividir entre 2, ni 3, ni 4, ni 5, ni 6...
// sólo en 1 y 7

// empezamos por 7/2 = 3. -> el resto NO es cero
// 15/3 = 5. El resto es 0

// tomamos un número x. Dividir entre el 2 y los números hasta llegar a x

let numero = prompt('Ingresa el número que quieres comprobar si es primo');
let primo = true;

// ejemplo: tenemos el 17 y queremos calcular el resto de la división resultante entre 3

let resto = 17 % 3;
console.log(resto);

for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
        // si en algún momento, esta operación da 0
        // el número queda descartado como primo
        primo = false;
    } 
    // si completamos el bucle y en ningún momento se ha cumplido la condición del if, entonces podemos decir que el número es primo
}

let mensaje = '';

if (primo) {mensaje = "El número elegido es primo"}
else {mensaje = "El número no es primo"};

// alternativa:
mensaje = "El número es primo";
if (!primo) {mensaje = "El número no es primo"};

alert(mensaje);