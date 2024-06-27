// seleccionamos los elementos con clase 'diapositivas' y nos retorna un array
const diapositivas = document.getElementsByClassName('diapositivas');

// el indice que cuenta del 1 al 5
let indice = 1;

// vamos al array y mostramos uno de los elementos
diapositivas[indice - 1].style.display = 'block';

function cambiarDiapositiva(valor, direccion) {
    // hacemos desaparecer todas las diapositivas
    for (let i = 0; i < diapositivas.length; i++) {
        diapositivas[i].style.display = 'none';
    }

    console.log('has pulsado la fecha ' + direccion);

    // cambiamos el indice según la flecha que pulsamos
    indice += valor;

    // corregimos el índice
    if (indice < 1) {indice = diapositivas.length};
    if (indice > diapositivas.length) {indice = 1};

    // mostramos la nueva diapositiva
    diapositivas[indice - 1].style.display = 'block';
}

function puntoDiapositiva(punto) {
    // seleccionamos una diapositiva dependiendo del punto que hayamos pulsado

    // hacemos desaparecer todas las diapositivas
    for (let i = 0; i < diapositivas.length; i++) {
        diapositivas[i].style.display = 'none';
    }

    indice = punto;

    // mostramos la nueva diapositiva
    diapositivas[indice - 1].style.display = 'block';
}

// PENDIENTE: Corregir fallos y optimizar el código (no repetido)