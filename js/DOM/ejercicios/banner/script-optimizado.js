// seleccionamos los elementos con clase 'diapositivas' y nos retorna un array
const diapositivas = document.getElementsByClassName('diapositivas');
// recogemos el array con los puntos
const puntos = document.querySelectorAll('span.punto');

// el indice que cuenta del 1 al 5
let indice = 1;

// vamos al array y mostramos uno de los elementos
mostrarDiapositiva();

// cambiar de diapositiva automáticamente:
setInterval(cambiarDiapositiva, 6000);

function cambiarDiapositiva(valor) {
    if(!valor) valor = 1;

    // cambiamos el indice según la flecha que pulsamos
    indice += valor;

    // corregimos el índice
    if (indice < 1) { indice = diapositivas.length };
    if (indice > diapositivas.length) { indice = 1 };

    // llamamos a la función para mostrar la nueva diapositiva
    mostrarDiapositiva();
}

function puntoDiapositiva(punto) {
    // seleccionamos una diapositiva dependiendo del punto que hayamos pulsado
    indice = punto;

    // llamamos a la función para mostrar la nueva diapositiva
    mostrarDiapositiva();
}

function mostrarDiapositiva() {
    // hacemos desaparecer todas las diapositivas
    for (let i = 0; i < diapositivas.length; i++) {
        diapositivas[i].style.display = 'none';
    }

    // mostramos la nueva diapositiva
    diapositivas[indice - 1].style.display = 'block';

    // marcar los puntos:
    // primero los desmarcamos todos
    for (let i = 0; i < puntos.length; i++) {
        // vamos por todos los puntos y les quitamos la clase 'activo'
        puntos[i].classList.remove('activo');
    }

    // luego marcamos el punto correspondiente al índice
    puntos[indice - 1].classList.add('activo');
}