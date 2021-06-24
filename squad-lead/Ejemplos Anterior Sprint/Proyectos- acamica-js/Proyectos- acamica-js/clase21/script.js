/*var num=0;

do{

    num = prompt("Ingrese un número");

}while(parseInt(num) <= 100);
*/

/*
var num=0;

for (let index = 0; index <= 10; index++) {
    num = num + parseInt(prompt("Ingrese un numero"));
}

console.log(num/10);*/

/*
var fruta = prompt("Ingrese una fruta").toLowerCase();

switch (fruta) {
    case "naranja":
        console.log("El Kg de Naranjas cuesta $40");
        break;

    case "manzana":
        console.log("El Kg de Manzanas cuesta $60");
        break;
    case "banana":
        console.log("El Kg de Bananas cuesta $80");
        break;

    default:
        console.log("No disponemos de " + fruta + ".");
        break;
}
*/

/*
var sum =0;

for (let index = 0; index < 5; index++) 
    sum += parseInt(prompt("Ingrese un numero"));
    
alert("Suma: "+sum);
*/

/*
var entrada, sum = 0,
    cont = 0;

do {
    entrada = prompt("Ingrese un numero").toLowerCase();

    if (!isNaN(entrada) || entrada == "salir") {

        if (entrada.length == 1) {
            sum += parseInt(entrada);
            cont++;
        }

    } else {
        alert("Entrada no valida");
    }

} while (entrada != "salir");

console.log(sum + " " + cont);
console.log("Promedio: " + (sum / cont));
*/

var num = parseInt(prompt("Ingrese un numero de 1 a 10"));

switch (num) {
    case 1:
        alert("A");
        break;
    case 2:
        alert("B");
        break;
    case 3:
        alert("C");
        break;
    case 4:
        alert("D");
        break;
    case 5:
        alert("E");
        break;
    case 6:
        alert("F");
        break;
    case 7:
        alert("G");
        break;
    case 8:
        alert("H");
        break;
    case 9:
        alert("I");
        break;
    case 10:
        alert("J");
        break;
    default:
        alert("Error ")
        break;
}