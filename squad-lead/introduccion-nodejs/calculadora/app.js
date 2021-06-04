let operations = require("./calculator");
let escribirArchivo = require("./writeFile");

function operacionparaescribir(val1, val2, type) {
    let texto = val1 + " ";
    let resultado = 0;
    switch (type) {
        case "suma":
            texto += "+ ";
            resultado = operations.suma(val1, val2);
            break;
        case "resta":
            texto += "- ";
            resultado = operations.resta(val1, val2);
            break;
        case "multiplicacion":
            texto += "X ";
            resultado = operations.multiplica(val1, val2);
            break;
        case "division":
            texto += "/ ";
            resultado = operations.divide(val1, val2);
            break;
    }
    texto += val2 + " = " + resultado + "\n";
    return texto;
}
let mensajeFinal = "";
mensajeFinal += operacionparaescribir(85, 7, "multiplicacion");
mensajeFinal += operacionparaescribir(22, 37, "suma");
mensajeFinal += operacionparaescribir(1, 8, "division");
mensajeFinal += operacionparaescribir(3, 7, "resta");
console.log(mensajeFinal);
escribirArchivo("operaciones.txt", mensajeFinal);
