// vamos a hacer una app que le pida dos números al usuario (dos prompts)
let numero1 = parseInt(prompt("ingrese el primer número"));
let numero2 = parseInt(prompt("ingrese el segundo número"));
let operar = prompt('Qué operación desea realizar? (s)umar, (r)estar, (m)ultiplicar, (d)ividir')

// le vamos a retornar la suma de ambos
let resultado = 0;

switch (operar) {
    case 's':
        resultado = numero1 + numero2;
        break;
    case 'r':
        resultado = numero1 - numero2;
        break;
    case 'm':
        resultado = numero1 * numero2;
        break;
    case 'd':
        resultado = numero1 / numero2;
        break;

    default:
        resultado = 'vuelve a intentarlo';
        break;
}


alert(resultado);