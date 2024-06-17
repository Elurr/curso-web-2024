// JUEGO DEL AHORCADO

// Tienes una palabra aleatoria
// lista de palabras
const lista = [
    'amarillo',
    'morado',
    'verde',
    'azul',
    'blanco',
    'rojo',
    'negro',
    'gris',
    'fucsia'
]
let palabra = '';
let numeroAleatorio = 0;
numeroAleatorio = Math.floor(Math.random() * lista.length);
palabra = lista[numeroAleatorio];

console.log(palabra);

let parrafo = document.getElementById('pGuiones');
parrafo.innerHTML = "_".repeat(palabra.length);

// La palabra está oculta 
// mesa = _ _ _ _
// guardamos el número de caracteres que tiene la palabra

// si longitud es de 7, el for se repite 7 veces


// Tienes que adivinar la palabra
function jugar(letra) {
    console.log(letra);
}

// Tienes que adivinar las letras de la palabra

// Si dices una letra que no está en la palabra pierdes una vida

// Si pierdes todas las vidas, pierdes el juego

// Si pierdes el juego, vuelves a empezar