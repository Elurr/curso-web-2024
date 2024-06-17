let jugada;
let jugadaCPU;
let puntuación;

const opciones = [
    'piedra',
    'papel',
    'tijera'
]

function elegir(jugada) {
    console.log("Has elegido " + jugada);
    let jugadaCPU = elegirCPU();

    // comparar las dos jugadas y determinar un ganador
    let resultado = comparar(jugada, jugadaCPU);
    console.log(resultado);
}

function elegirCPU() {
    // elegir numero random 0-2
        // Math.floor(Math.random()...)...
    let numeroAleatorio = Math.floor(Math.random() * 3);
    
    // opciones[numeroRandom]
    let jugadaCPU = opciones[numeroAleatorio];

    // console-log -> la CPU ha elegido...
    console.log("La CPU ha elegido " + jugadaCPU);

    // retornar el dato para que salga de la función
    return jugadaCPU;
}

function comparar(jugada, jugadaCPU) {
    // if (jugada == jugadaCPU) {
    //     return "Hay un empate";
    // }
    
    
    switch (true) {
        case (jugada == jugadaCPU):
            return "Hay un empate";

        case (jugada == 'piedra' && jugadaCPU == 'tijera'):  
            return "Has ganado";
        case (jugada == 'tijera' && jugadaCPU == 'papel'):  
            return "Has ganado";
        case (jugada == 'papel' && jugadaCPU == 'piedra'):  
            return "Has ganado";

        default:
            return "Has perdido";
    }
}