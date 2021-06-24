const trm = document.getElementById("trm");
const div1 = document.getElementById("divisa1");
const div2 = document.getElementById("divisa2");

function convertirUSD_COP() {
    verificar();
    div2.value = (div1.value * trm.value).toFixed(2);
}

function convertirCOP_USD() {
    verificar()
    div1.value = (div2.value / trm.value).toFixed(2);
}

function verificar() {
    if(trm.value==""){
        alert("Ingrese un TRM");
    }
}