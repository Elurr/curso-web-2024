// seleccionamos los divs y les damos un evento a todos
const divs = document.querySelectorAll('.container div');

for (let i = 0; i < divs.length; i++) {

    divs[i].addEventListener('click', function() {
        // guardamos 'this' en una variable
        // this se refiera al objeto que interactúa en cada caso
        let cuadro = this;
        // le cambiamos el color del fondo
        cuadro.style.backgroundColor = 'dodgerblue';
        
        // ponemos un temporizador para que el div vuelva a su color inicial
        setTimeout(function() {
            // desde aquí dentro no podemos acceder a 'this', por eso lo hemos guardado en una variable
            cuadro.style.backgroundColor = 'white';
        }, 1500);
        // 1500ms = 1.5s -> el valor de transition que le dimos en CSS
    })
}

