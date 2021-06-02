//Escribe una función arrow que reciba como parámetro un array y calcule el promedio de los elementos tipo numérico.
//solucion usando reduce
let values = [2, 56, 3, 41, 0, 4, 100, 23];
let sum = values.reduce((previous, current) => current += previous);
let avg = sum / values.length;
console.log(avg)
//solucion usando for loop
let arrayNums = [1, 5, true, 'google', false, 7, 8, 9, 6, 3, 5, 4, "acamica", 7, 8, 5];
let getAverage = list => {
    let sum = 0;
    let quantity = 0;
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        if (typeof (list[i]) === 'number') {
            sum += list[i];
            quantity += 1
        }
    }
    return sum / quantity;
}
console.log(getAverage(arrayNums))