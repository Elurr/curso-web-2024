console.log('Objeto Date()');

// El Objeto Date() (fecha) nos trabajar con fechas en JavaScript:

console.log(Date());

// El Objeto Date() es invariable, no lo podemos modificar, sólo leer.

// Para solventar esto, podemos crear copias:

// Crear una copia con la fecha/hora actual:
let fecha = new Date();
console.log(fecha);

// Crear una copia con una fecha concreta
// formato string año-mes-dia
fecha = new Date('2003-02-15');
console.log(fecha);

// formato numérico año(*), mes(*), dia, horas, minutos, segundos, ms) 
fecha = new Date(1996, 9, 24);
console.log(fecha);
// los meses van de 0 a 11 (Enero = 0, Diciembre = 11)
// introducir un dia superior a 11, no da error, si no que empieza a contar el siguiente año
fecha = new Date(2015, 15, 29);
console.log(fecha);

// Qué pasa si omitimos el mes:
fecha = new Date(2000);
console.log(fecha);

// si sólo ponemos un dato, lo trata como milisegundos


// si en el año ponemos sólo dos cifras, lo tratará como 19xx
fecha = new Date(91, 5, 12);
console.log(fecha);

// Las fechas se guardan como milisegundos
// 0 ms es el tiempo Zero, 1 de Enero de 1970 00:00UTC
// Un dia (24h) son 86 400 000 ms
// La fecha actual es: 1716888227553 ms desde el 1 de Ene de 1970

fecha = new Date(1716888227553);
console.log(fecha);
fecha = new Date(0);
console.log(fecha);
fecha = new Date(-86400000);
console.log(fecha);


// ---- Métodos ----
fecha = new Date('1991-June-21');
console.log(fecha.toDateString());
// toDateString transforma la fecha a un formato más legible

console.log(fecha.toISOString());
console.log(fecha.toUTCString());
// Distintos formatos de fecha

// Parsear fechas
// Date.parse() convierte un string de fecha a milisegundos

console.log(Date.parse('May 29 2024'));

console.log(new Date(1716933600000));

// --- Tomar datos del objeto fecha ---
fecha = new Date(1996, 9, 24, 4);
console.log(fecha);

const dias = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado'
]
const meses = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
]

// fecha.getDay() = 4
// por lo tanto, lo de abajo equivale a:
// dias[4]
console.log(dias[fecha.getDay()]);

// fecha.getMonth() = 9
// este número equivale al mes de octubre
// ya que empezamos a contar los meses desde 0
console.log(meses[fecha.getMonth()]);

// otros métodos get (tomar)
let fechaActual = new Date();
// hora, minutos y segundos
console.log(fechaActual.getHours());
console.log(fechaActual.getMinutes());
console.log(fechaActual.getSeconds());




// calcular un dia en ms
// 1000ms * 60s * 60m * 24h
console.log(1000 * 60 * 60 * 24);

let fechaHoy = new Date();
console.log(new Date(fechaHoy - 86400000));

// 18 años en ms
// 18años * 365 días * 24h * 60m * 60s * 1000ms
let años18 = new Date((18 * 365 * 24 * 60 * 60 * 1000) + (4 * 24 * 60 * 60 * 1000));
console.log(años18);


// ---- Métodos set ----
// Se usan para establecer datos en una fecha
fecha = new Date();

// setFullYear permite establecer el año de una fecha
fecha.setFullYear(2018);
console.log(fecha);

// También podemos establecer el año, mes y dia
fecha.setFullYear(2002, 2, 25);
console.log(fecha);

// establecer mes o el dia solamente
// el mes se establece con setMonth() 0-11
// el dia del mes se establece con setDate() 1-31

fecha.setMonth(6);
fecha.setDate(8);
console.log(fecha);

// ejemplo práctico
// queremos realizar una reserva en un hotel el dia 15 de agosto para 3 días

let fechaEntrada;
let fechaSalida;

fechaEntrada = new Date('2024-08-15');
fechaEntrada = new Date(2024, 7, 15);
console.log(fechaEntrada);

// con esto las dos fechas parten del día 15 de agosto
fechaSalida = fechaEntrada;
// usamos setDate() para establecer el día de la fecha de salida
// dentro del paréntesis tomamos el dia de la fecha de entrada y le sumamos 3
fechaSalida.setDate(fechaEntrada.getDate() + 3);
console.log(fechaSalida);

// ejemplo 2
// A un trabajador se le vence el contrato el 18 de junio
// Le han dicho que se lo van a renovar por 18 meses
// Calcular la nueva fecha de vencimiento usando el objeto Date()
// fecha en la que inicia el nuevo contrato
let fechaInicio;
// fecha en la que finaliza el nuevo contrato
let fechaFin;

fechaInicio = new Date('Jun 18, 2024');
fechaFin = fechaInicio;
fechaFin.setMonth(fechaInicio.getMonth() + 18);

console.log(fechaFin);

// ejemplo 3 - alarma
let alarma = new Date();

alarma.setHours(11);
alarma.setMinutes(20);

function saltarAlarma() {
    if (alarma <= Date()) {
        alert('Hora del descanso!!');
    }

    setTimeout(saltarAlarma, 1000);
}

// alert('Esto es una alerta');