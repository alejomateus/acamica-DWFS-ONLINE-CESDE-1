/*function primera(callback) {
    setTimeout(function(){
        console.log("Estoy en Primera");
        callback();
    }, 1000);
}

function segunda() {
    console.log("Estoy en Segunda");
}

primera(segunda);
*/
/*
let colores = [];

colores.push("Rojo");
colores.push("Azul");
colores.push("Verde");
colores.push("Amarillo");

console.log(colores);

colores.sort();

console.log(colores);
*/
/*
let productos = [];

productos.push({
    nombre: "Remera",
    precio: 100
});
productos.push({
    nombre: "Pantalon",
    precio: 800
});
productos.push({
    nombre: "Camisa",
    precio: 300
});

console.log(productos);

productos.sort(function (valor1, valor2) {
    if (valor1.nombre < valor2.nombre) {
        return -1;
    } else {
        return 1;
    }
});
 
console.log(productos);
*/
/*
let cal = (num,callback)=>{
    if(typeof(callback)!=="function"){
        throw new Error("No es una funcion");
    }

    console.log("Hola Cal");
    callback();
}

let callback = function(){
    console.log("Hola Callback");
}

try {
    cal(3,3);    
} catch (error) {
    console.log(error.name+" "+error.message);
}
*/
/*
let cal = (num, callback) =>{
    console.log(callback(num));
}

cal(3,(num)=>num*num);
*/

/*
let cal = (num, callback) =>{
    console.log(callback(num));
}

cal(3,Math.sqrt);
*/

let cal = (num, callback) =>{
    if(callback(num)){
        console.log("Si es par");
    }else{
        console.log("No es par");
    }
}

cal(2,(num)=>(num%2==0));