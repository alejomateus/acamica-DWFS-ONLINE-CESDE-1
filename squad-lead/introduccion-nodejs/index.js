//Hola Mundo 
console.log("Hola Mundo");


//Creamos un array de frutas
var Lang = ['Pera', 'Banana', 'Limones'];

//muestro las frutas
console.log(Lang);

//verificamos cuantos items tiene el array 
var cant = Lang.length
console.log(cant);

//Buscamos la fruta que esta antes de Banana

var found = Lang.find(element => element > 'Banana');
console.log(found);


//agregamos un nueva fruta 
Lang.push('Naranja');
console.log(Lang);
// expected output: Array [ 'java', 'c', 'python', 'node' ]