let number1 = new Promise((resolve, reject) => {
    let numberOne = Math.floor(Math.random() * 100);
    // console.log("numero1", numberOne)
    if(numberOne >50) {
        resolve(numberOne);
    } else {
        reject("numero1")
    }
});
let number2 = new Promise((resolve, reject) => {
    let numberTwo = Math.floor(Math.random() * 100);
    // console.log("numero2", numberTwo)
    if(numberTwo >50) {
        resolve(numberTwo)
    } else {
        reject("numero2")
    }
});
let number3 = new Promise((resolve, reject) => {
    let numberThree = Math.floor(Math.random() * 100);
    // console.log("numero3", numberThree)
    if(numberThree >50) {
        resolve(numberThree)
    } else {
        reject("numero3")
    }
});
Promise.all([number1, number2, number3]).then((resp) => {
    console.log(resp, "todos son mayores"); 
}) .catch(err => {
    console.log(err, "es menor"); 

});