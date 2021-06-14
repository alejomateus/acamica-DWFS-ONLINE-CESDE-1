const express = require("express");
const compression = require('compression');
const app = express();

let users = [
    {
        id: 102313450,
        name: "Alejandro",
        lastname: "Mateus",
        email: "alejo.mateus.ud@gmail.com",
        phoneNumber: "3143720783"
    },
    {
        id: 102313452,
        name: "Jessica",
        lastname: "Person",
        email: "alejo.mateus.ud2@gmail.com",
        phoneNumber: "3143720784"
    }
];
const key = "acamica";

let validationFunction = (req, res, next) => {
    if (req.headers.authorization === key) {
        next();
    } else{
        res.json("Hola no me enviaste el parametro de validacion o el parametro es incorrecto")
    }
}

app.get("/users", validationFunction, (req, res) => {
    res.json(users)
});
app.use(compression());

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});