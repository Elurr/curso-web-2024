// INICIO
let contador;
let aforo;

// Contador a cero
contador = 0;
aforo = 5;

// Tenemos que identificar todos los elementos HTML que vayamos manipular con JS
// Los guardamos en variables:
let btnSumar = document.getElementById('btn-sumar');
let btnRestar = document.getElementById('btn-restar');

let pTotal = document.getElementById('total');
let pCompleto = document.getElementById('completo');

// Las funciones son bloques de código reutilizables que podemos llamar a voluntad
function sumar() {
    // la función sumar se ejecuta al pulsar el botón +
    if (contador < aforo) { 
        // el contador aumenta sólo cuando es menor de 20
        contador++; 
    } else {
        // si intentamos sumar cuando el contador está en 20:
        pCompleto.style.opacity = 1;
        // aparece el mensaje de aforo completo
    }
    resultado();
    comprobarBoton();
}
function restar() {
    if (contador > 0) contador--;
    // sólo resta si el contador es mayor que cero. Esto es para evitar mostrar números negativos
    pCompleto.style.opacity = 0;
    // en cuanto sale alguien, restamos y el aforo deja de estar completo
    resultado();
    comprobarBoton();
}
function resultado() {
    pTotal.innerHTML = contador;
    // Cada vez que ejecutamos esta función, el párrafo HTML se actualiza con el valor del contador
}
// función para habilitar o deshabilitar los botones
function comprobarBoton() {
    if (contador > 0) {
        // reactivamos el btn - si el contador sube de 0
       btnRestar.classList.remove('inactivo');
        //classList accede a la lista de las clases del elemento HTML
        //podemos alterar esta lista con remove y add para quitar y añadir clases respectivamente 
    }
    if (contador == 0) {
        // el botón - se vuelve a desactivar cuando el contador llega a 0
        btnRestar.classList.add('inactivo');
    }
    if (contador == aforo) {
        // desactivamos el btn + si el contador alcanza el aforo máximo
       btnSumar.classList.add('inactivo'); 
        // document.getElementById('btn-sumar').classList.add('inactivo');
    }
    if (contador < aforo) {
        // el botón + se vuelve a activar cuando el contador baja del aforo
        btnSumar.classList.remove('inactivo');
    }
}