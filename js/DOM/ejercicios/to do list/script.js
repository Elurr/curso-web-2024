// Identificamos los elementos HTML con los que vamos a trabajar
let boton = document.getElementById('btnAñadir');
let input = document.getElementById('inputTexto');
let lista = document.getElementById('lista');

function agregarTarea() {
    // guardamos el contenido del input en una variable
    let texto = input.value;
    if (texto.length > 0) {

    // construimos el elemento li
    let elemento = document.createElement('li');
    // le añadimos el contenido
    elemento.innerHTML = '<button onclick="marcarTarea(this)"><i class="bi bi-check2"></i></button>';
    elemento.innerHTML += texto;
    elemento.innerHTML += '<button onclick="borrarTarea(this)"><i class="bi bi-eraser"></i></button>';

    elemento.addEventListener('click', marcarTarea);

    // lo agregamos a la lista
    lista.appendChild(elemento);

    // borramos el texto del input
    input.value = '';
    }
}

function borrarTarea(botonX) {
    // al pulsar el botón de borrar identificamos al li padre
    let tarea = botonX.parentElement;

    // borramos la tarea
    // con css 
    // tarea.style.display = 'none';

    // con removeChild()
    // vamos al padre (que es la ul, lista) y eliminamos el li (el hijo)
    lista.removeChild(tarea);
}

function marcarTarea(botonV) {
    // si clicamos directamente el li (el texto) le cambiamos directamente la clase
    this.classList.toggle('marcada');

    // si entramos desde el botón, buscamos al padre (li) y le cambiamos la clase
    if (botonV) {
        botonV.parentElement.classList.toggle('marcada');
    }
}

boton.addEventListener('click', agregarTarea);
// a boton le agregamos un evento, que activa la función agregarTarea cuando hacemos click sobre éste

// ejecutar el mismo evento, pero con la tecla "Enter"
input.addEventListener('keypress', function(evento) {
    if (evento.key == 'Enter') {
        agregarTarea();
    }
})
