function name_function (param1, param2, paramn){
    if (param1 > param2) {
        return value1
    } else {
        return value2;
    }
}
name_function => (param1, param2, paramn) => {
    if (param1 > param2) {
        return value1
    }else {
        return value2;
    }
};
let name_function = (param1, param2, paramn) => (param1>param2)?value1:value2;

let mayorMenorIgual = num => num>0?"Es mayor":(num<0?"Es menor":"Es igual");
if (num>0) {
    return "Es mayor"
} else {
    if (num<0) {
        return "Es menor"
    } else {
        return "Es cero"
    }
}

