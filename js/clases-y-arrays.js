// El objetivo es cambiar los divs de color
// por un lado identificamos los divs y por otro los colores
const divs = document.getElementsByClassName("color");

const colores = ["#3498DB", "#7D3C98", "#16A085", "#34495E"];

// cambiamos los divs de color
divs[0].style.backgroundColor = colores[0];
divs[1].style.backgroundColor = colores[1];
divs[2].style.backgroundColor = colores[2];
divs[3].style.backgroundColor = colores[3];