/*let promesa = new Promise(function (resolve,reject) {
    console.log("Pendiente...");
    setTimeout(() => {
        if(true){
            resolve("la promesa finalizo correctamente");
        }else{
            reject("ha ocurrido un error");
        }    
    }, 2000);
    
});

promesa
    .then(function (response) {
        console.log("respuesta",response);
    })
    .catch(function (error) {
        console.log("respuesta",error);
    })
*/
/*
let promesa1 = new Promise((resolve, reject) => {
    setTimeout((function () { reject("uno"); }    ), 500);
});

let promesa2 = new Promise((resolve, reject) => {
    setTimeout((function () { resolve("dos"); }    ), 300);
});

let promesa3 = new Promise((resolve, reject) => {
    setTimeout((function () { reject("tres"); }    ), 1000);
});

// Promise.all

Promise.race([promesa1, promesa2, promesa3]).then(function (respuesta) {
    console.log(respuesta);
}).catch(function (error) {
    console.log(error);
});*/
/*
let promesa1 = new Promise((resolve, reject) => {
    //console.log("1");
    resolve("uno");
});

let promesa2 = new Promise((resolve, reject) => {
    //console.log("2");
    resolve("dos");
});

let promesa3 = new Promise((resolve, reject) => {
    //console.log("3");
    resolve("tres");
});

promesa1.then(function (respuesta) {
    console.log(respuesta);
    return promesa2;
}).then(function (segunda) {
    console.log(segunda);
    return promesa3;
}).then(function (tercera) {
    console.log(tercera);
}).catch(function (error) {
    console.log("Error:", error);
});*/

/*
let promesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promesa resuelta");
    }, 2000);
});

promesa.then(function (res) {
    console.log(res);
})*/

/*
let promesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("promesa rechazada");
    }, 1000);
});

promesa.catch(function (res) {
    console.log(res);
});*/

/*
let parOimpar = (num) => num%2==0;

let promesa = new Promise((resolve,reject)=>{
    let num = parseInt(Math.random() * 100);
    parOimpar(num) ? resolve(num) :  reject(num);
});

promesa.then(function (res) {
    console.log(res);
}).catch(function (error) {
    console.log("error",error);
})*/

/*
const timeCal = () => parseInt(Math.random() * 1000 + 1);

let promesa1 = new Promise(function (resolve, reject) {
    const time = timeCal();
    setTimeout(() => {
        resolve({"tiempo":time,"promesa":1});
    }, time);
});

let promesa2 = new Promise(function (resolve, reject) {
    const time = timeCal();
    setTimeout(() => {
        resolve({"tiempo":time,"promesa":2});
    }, time);
});

Promise.race([promesa1,promesa2]).then(function (res) {
    console.log(res);
}).catch(function (error) {
    console.log("error",error);
})
*/

var num = parseInt(prompt("ingrese un numero"));

let promesaSuma = new Promise((resolve,reject)=>{
    num = num+num;
    resolve(num);
});

let promesaCuadrado = new Promise((resolve,reject)=>{
    num = num*num;
    resolve(num);
});

let promesaRaiz = new Promise((resolve,reject)=>{
    num=Math.sqrt(num);
    resolve(num);
});

promesaSuma.then((sum)=>{
    console.log("suma: ",sum);
    return promesaCuadrado;
}).then((cua)=>{
    console.log("cuadrado: ",cua);
    return promesaRaiz;
}).then((raiz)=>{
    console.log("raiz: ",raiz);
})