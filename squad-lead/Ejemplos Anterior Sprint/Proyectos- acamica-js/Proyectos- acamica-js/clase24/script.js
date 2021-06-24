/*let data = [1, 2, 3, 100, true, false, 'More'];

console.log("length: "+data.length);

data.unshift('tacto');

console.log(data);

data.push("tacto");

console.log(data);

let index = data.indexOf(100);

console.log(index+" : "+data[index]);

data.shift();

console.log(data);

data.pop();

console.log(data);

data.splice(data.indexOf(3),1);

console.log(data); */

/*
var array = [];
do {
    var datos = prompt("Ingrese un número");
    if (!isNaN(datos)) {
        array.push(datos);
    }
} while (datos != "stop");

console.log(array);
*/

/*
var par = [];
var impar = [];
var letras = [];

do {
    var entrada = prompt("Ingrese un dato");

    if (!isNaN(entrada) && entrada != 0) {
        if (parseInt(entrada) % 2 == 0) {
            par.push(entrada);
        } else {
            impar.push(entrada);
        }
    } else if (entrada != 0) {
        letras.push(entrada);
    }


} while (entrada != 0);

console.log('par', par);
console.log('impar', impar);
console.log('letras', letras);
*/
/*
console.log(Number.isSafeInteger(Math.PI));
console.log(Math.exp(2,53));*/


var array = [];

do {
    var entrada = prompt("Ingrese un numero");

    if (!isNaN(entrada) && entrada != 0) {

        array.push(entrada);

    }
} while (entrada != 0);

console.log('Array', array);

var max = 0;
var min = array[0];

for (let index = 0; index < array.length; index++) {
    if(array[index]>max){
        max = array[index];
    }

    if(array[index]<min){
        min = array[index];
    }
}



var indexmax = array.indexOf(max);
var indexmin = array.indexOf(min);

console.log("max",max,indexmax );
console.log("min",min,indexmin);

array.splice(indexmax,1);
array.splice(indexmin,1);

/*
array.slice(array.indexOf(max),1);
array.slice(array.indexOf(min),1);*/

console.log(array);