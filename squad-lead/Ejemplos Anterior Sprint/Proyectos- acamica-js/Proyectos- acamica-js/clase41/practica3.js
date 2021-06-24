const calculator = require('./calculator');
const practica = require('./practica1');


let a = 3;
let b = 7;
let res='';

res += `${a} + ${b} = ${calculator.addition(a,b)} \n`;
res += `${a} - ${b} = ${calculator.subtraction(a,b)} \n`;
res += `${a} * ${b} = ${calculator.multiplication(a,b)} \n`;
res += `${a} / ${b} = ${calculator.division(a,b)} \n`;

practica.writeFile('log.txt',res);