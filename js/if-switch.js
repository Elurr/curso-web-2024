console.log('if y switch');

// if es un bloque de código que se ejecuta en base a una condición
let edad = 20;
if (edad >= 18) {
    console.log("Enhorabuena, puedes votar")
}

if (edad >= 63) {
    console.log('Enhorabuena, te puedes jubilar')
}

// podemos encadenar tantos bloques y condiciones como queramos:
let hora = new Date().getHours();
console.log(hora);
let saludo = '';

if (hora <= 12) {
    saludo = 'Buenos días'
} else if (hora <= 20) {
    saludo = 'Buenas tardes';
} else {
    saludo = 'Buenas noches';
}

console.log(saludo);

// switch se usa para ejecutar diferentes bloques de código en base a diferentes condiciones

// supongamos que queremos dar un saludo en base al día de la semana:

// getDate() es un método que retorna un valor de 0 a 6 según el día de la semana
// al estar en inglés, el primer día (el 0) es el domingo
// domingo = 0, lunes = 1, martes = 2...

let dia = new Date().getDay();
let diaSemana;
console.log(dia)

switch (dia) {
    case 0:
        diaSemana = "domingo";
        break;
    case 1:
        diaSemana = "lunes";
        break;
    case 2:
        diaSemana = "martes";
        break;
    case 3:
        diaSemana = "miércoles";
        break;
    case 4:
        diaSemana = "jueves";
        break;
    case 5:
        diaSemana = "viernes";
        break;
    case 6:
        diaSemana = "sábado";
        break;

    default:
        console.log('algo ha ido mal');
        break;
}
console.log(saludo + ', hoy es ' + diaSemana)

// comprobar si es fin de semana
let mensaje;
switch (dia) {
    default:
        mensaje = 'Oh no, aún falta para el finde...'
        break;
    case 0:
    case 6:
        mensaje = 'Yupi! Estamos en el finde!!'
        break;   
}

console.log(mensaje)