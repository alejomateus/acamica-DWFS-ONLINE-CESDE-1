/*
function triangulos(lado1, lado2, lado3) {
    let res;
    if (lado1 == lado2 && lado1 == lado3) {
        res = "Triangulo Equilatero";
    } else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        res = "Triangulo Isoceles";
    } else {
        res = "Triangulo Escaleno";
    }
    return res;
}

var lado1, lado2, lado3;

lado1 = prompt("Ingrese primer lado del triangulo");
lado2 = prompt("Ingrese segundo lado del triangulo");
lado3 = prompt("Ingrese tercer lado del triangulo");

console.log(triangulos(lado1, lado2, lado3));*/
/*
var valorHora, cantHorasMes, cantHorasExtra;

valorHora = ingresarDatos("Ingrese el valor de la hora");
cantHorasMes = ingresarDatos("Ingrese la cantidad de horas \n trabajadas en el mes");
cantHorasExtra = ingresarDatos("Ingrese la cantidad de horas extra\n trabajadas en el mes");

function ingresarDatos(texto) {
    let input;
    do {
        input = prompt(texto);
    } while (isNaN(input) && input!="");
    return parseInt(input);
}

function calcularSueldo(valorHora, cantHorasMes, cantHorasExtra) {
    let sueldo, valorHoraExtra;
    sueldo = valorHora * cantHorasMes;
    if (cantHorasExtra != 0) {
        valorHoraExtra = valorHora + (valorHora * 0.5);
        sueldo += (valorHoraExtra * cantHorasExtra);
    }
    return sueldo;
}

alert("Sueldo total: $" + calcularSueldo(valorHora, cantHorasMes, cantHorasExtra));
*/
/*
var num;

do {
    num = parseInt(prompt("Ingrese un numero"));
    alert("El factorial de " + num + " es " + factorial(num));
} while (num != 0);

function factorial(num) {
    let fact = 1;
    for (let index = 1; index <= num; index++) {
        fact = fact * index;
    }
    return fact;
}
*/