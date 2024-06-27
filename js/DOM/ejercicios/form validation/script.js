// Extraer el contenido de un input y guardarlo en una variable
// tomamos las dos contraseñas:
//      comprobamos que tengan al menos 4 caracteres
//      que sean iguales
// en caso de que no cumplan estas condiciones, imprimir un mensaje en pantalla donde se indique el error (p id='mensaje') 

// guardar el parrafo en una variable
let parrafo = document.getElementById('mensaje');

function comprobar() {
    let texto = '';
    // al pulsar el botón, guardamos las contraseñas en variables
    let pass1 = document.getElementById('fpass1').value;
    let pass2 = document.getElementById('fpass2').value;
    // value es el contenido que escribe el usuario dentro del input

    if (pass1.length >= 4 && pass2.length >= 4) {
        // comprobar que son iguales
        if (pass1 == pass2) {
            // mensaje que indique que las contraseñas coinciden
            texto = 'Las contraseñas coinciden';
        } else {
            // mensaje que indique que las contraseñas NO coinciden
            texto = 'Las contraseñas NO coinciden';
        }
    } else {
        texto = 'Las contraseñas deben de tener al menos 4 caracteres';
    }

    // imprimir el mensaje en el párrafo
    parrafo.innerHTML = texto;
}

