// Cuenta atrás de un número dado por el usuario hasta 1

// le damos un prompt al usuario y lo guardamos
let numero = prompt('Ingresa un número para la cuenta atrás.')

// creamos la variable vacía
let texto = '';

// un for que se repita n veces hasta llegar a 1
for (let i = numero; i > 0; i--) {
    // let i = numero, porque empezamos a contar desde el número
    // i > 0, porque vamos a contar hasta que la i llegue a 0
    // i-- para que la cuenta sea regresiva
    
    texto += i + " ";
}

// imprimir el mensaje en pantalla para el usuario
alert(texto)