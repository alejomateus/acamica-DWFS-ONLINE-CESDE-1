/*function myFunction() {
    console.log("holaaa");
    return e;
}

function myFunction2() {
    console.log("oodoo");
}

// myFunction();    

try {
    myFunction();
    myFunction2();
} catch (e) {
    console.log("Hubo un error "+e.name+" mensaje: "+e.message);
}*/


const username = "Admin";
const pass = "1234";

function verificarLogin(user, passw) {
    return (user == username && passw == pass);
}

var us = prompt("Ingrese usuario");
var pw = prompt("Ingrese contraseña");

try {

    if (!verificarLogin(us, pw)) {
        throw (new Error("loging Datos Invalidos"))
    } else {
        alert("Sesion iniciada");
    }

} catch (e) {
    console.log(e.name + " " + e.message);
}


/*
var radio = prompt("Ingrese el radio del circulo: ");

function calcularDiametro(radio) {
    if (!(parseFloat(radio) < 0)) {
        return radio * 2;
    } else {
        throw (new Error("El radio es invalido"));
    }
}

try {
    alert("El diametro es: " + calcularDiametro(radio));
} catch (error) {
    console.log(error.name + " : " + error.message);
}
*/
/*
function sumNumeros(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        return num1 + num2;
    } else {
        throw (new Error("Entrada invalida"));
    }
}

do {
    var num1 = prompt("Ingrese primer numero");
    var num2 = prompt("Ingrese segundo numero");
    try {
        var sum = sumNumeros(parseFloat(num1), parseFloat(num2));
    } catch (error) {
        console.log(error.name + " " + error.message);
    }

} while (sum < 100);
*/
/*
var num = prompt("Ingrese un numero");

function numeros(num) {
    if (!isNaN(num)) {
        if (parseInt(num) > 10) {
            if (parseInt(prompt("Ingrese otro numero")) > 100) {
                alert("A");
            } else {
                alert("B");
            }
        } else {
            if (parseInt(prompt("Ingrese otro numero")) > 1000) {
                alert("C");
            } else {
                alert("D");
            }
        }
        alert("Primer numero: " + num);
    }else{
        throw (new Error("Entrada invalida"));
    }
}

try {
    numeros(num);
} catch (error) {
    console.log(error.name + " " + error.message);
}*/