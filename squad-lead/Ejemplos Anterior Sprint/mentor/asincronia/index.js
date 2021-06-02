// function multiply(value) {
//     return value * 10;
// }
// function convertToInteger(value) {
//     return parseInt(value);
// }

// function getData() {
//     let data = prompt("Solicitar los datos");
//     return multiply(convertToInteger(data));
// }
// console.log(getData());
// function calculateGeneralDate(date) {
//     return new Date(date);
// }
// function CalculateFinalData(data, calculateDate) {
//     let fecha = calculateDate(data.fecha);
//     let nombre = data.nombre;
//     console.log("Hello " + nombre + " hoy es " + fecha);
// }
// let datos ={ nombre: "Acamica", fecha: "10-12-2020" }
// CalculateFinalData(datos, calculateGeneralDate)
// let isPair = (num) => (num % 2 == 0);
// let cal = (num, callback) => {
//     if (callback(num)) {
//         console.log("Si es par");
//     } else {
//         console.log("No es par");
//     }
// }

// cal(2, isPair);
// function primera(callback) {
//     console.log("Estoy en Primera");
//     setTimeout(callback, 5000);
// }

// function segunda() {
//     console.log("Estoy en Segunda");
// }

// primera(segunda);
// let cal = (num, callback, callback2, callbackn) => {
//     // if (typeof (callback) !== "function") {
//     //     throw new Error("No es una funcion");
//     // }

//     console.log("Hola Cal");
//     callback();
//     callback2();
//     callbackn();
// }

// let functionanalize = function () {
//     console.log("Hola functionanalize");
// }

// try {
//     cal(3,3, functionanalize, functionanalize );
// } catch (error) {
//     console.log(error.name + " " + error.message);
// }

// let summatory = (num1, num2) => (num1 + num2);
// let rest = (num1, num2) => (num1 - num2);
// let multiply = (num1, num2) => (num1 * num2);
// let division = (num1, num2) => (num1 / num2);

// let balance = (num1, num2, sum, div) => div(sum(num1, num2), 2)

// console.log(balance(5, 3, summatory, division));
// let products = [{}];
// productsSelect = [];
// function addProduct(product, mostrarMensaje) {
//     if (product == 1) {
//         mostrarMensaje("producto1");
//     } else {
//         mostrarMensaje("producto2");
//     }

// }
// showMessage = (message) => alert(message);
// addProduct(2, showMessage);

// function primera(callback) {
//     setTimeout(function () {
//         console.log("Estoy en Primera");
//     }, 5000);
//     callback();
// }
// function segunda() {
//     console.log("Estoy en Segunda");
// }
// primera(segunda);

// function primera() {
//     console.log("Estoy en primera");
// }
// function segunda() {
//     console.log("Estoy en Segunda");
// }
// setTimeout(primera, 5000)
// segunda();
// let colores = [];

// colores.push("Rojo");
// colores.push("Azul");
// colores.push("Verde");
// colores.push("Amarillo");

// console.log(colores);

// colores.sort();

// console.log(colores);
let productos = [];

productos.push({
    nombre: "Zapatos",
    precio: 1000
});
productos.push({
    nombre: "Pantalon",
    precio: 8000
});
productos.push({
    nombre: "Camisa",
    precio: 300
});

console.log(productos);
setTimeout(
    function () {
        productos.sort(function (valor1, valor2) {
            if (valor1.precio > valor2.precio) {
                return -1;
            } else {
                return 1;
            }
        });
        console.log(productos);
    }, 5000)
