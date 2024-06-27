// seleccionamos los divs y les damos un evento a todos
const divs = document.querySelectorAll('.container div');

for (let i = 0; i < divs.length; i++) {

    divs[i].addEventListener('click', function() {
        // guardamos 'this' en una variable
        // this se refiera al objeto que interactúa en cada caso
        let cuadro = this;
        
        // crear los colores aleatorios
        // genero el rojo
        Math.random();
        // genera un número del 0 al 1 (0.767286872163)
        // necesitamos un número entre 0 y 255
        let min = 0;
        let max = 255 + 1;
        // el +1 es para compensar que Math.floor() redondea a la baja
        let red = Math.floor(Math.random() * max) + min;

        // genero el verde
        let green = Math.floor(Math.random() * max) + min;

        // genero el azul
        let blue = Math.floor(Math.random() * max) + min;

        // le cambiamos el color del fondo
                                        `rgb(${red}, ${green}, ${blue})`
        cuadro.style.backgroundColor = 'rgb('+red+', '+green+', '+blue+')';
        
        // ponemos un temporizador para que el div vuelva a su color inicial
        setTimeout(function() {
            // desde aquí dentro no podemos acceder a 'this', por eso lo hemos guardado en una variable
            cuadro.style.backgroundColor = 'white';
        }, 1500);
        // 1500ms = 1.5s -> el valor de transition que le dimos en CSS
    })
}

