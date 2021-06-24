const express = require("express");
const bodyParser = require("body-parser"); // Transformar a tipo JSON los datos que recibimos a traves de requests http
const app = express();
var authors = [
    {
        id: 1,
        name: "Jorge Luis",
        lastName: "Borges",
        birthday: "24/08/1899",
        books: [
            {
                id: 1,
                title: "ficciones",
                description: "se trata uno de sus mas...",
                published_year: 1944
            },
            {
                id: 2,
                title: "El aleph",
                description: "otra recopilación de cuentos...",
                published_year: 1949
            }
        ]
    },
    {
        id: 2,
        name: "Julio",
        lastName: "Cortazar",
        birthday: "12/05/1970",
        books: [
            {
                id: 1,
                title: "Rayuela",
                description: "xxxxxxxxxx...",
                published_year: 1963
            }
        ]
    }
];
//Ruta autores (get y post)
// Ruta autores (con id) - get, delete y put
app.use(bodyParser.json()); // Middleware global para convertir todo lo recibido a formato JSON
function validarId(req, res, next) {
    const id = req.params.id;
    var index = authors.findIndex(el => el.id == id);
    req.params.findIndex = index;
    if (index == -1) {
        res.status(404).json({ error: "el autor no existe" });
    } else {
        next();
    }
}
app.get("/autores", (req, res) => {
    res.json(authors);
})
app.post("/autores", (req, res) => {
    authors.push(req.body); // req.body takes the new information written in an html form for example
    res.status(200).json();
});
app.get("/autores/:id", validarId, (req, res) => {
    const index = req.params.findIndex;
    res.json(authors[index]);
});
app.delete("/autores/:id", validarId, (req, res) => {
    const index = req.params.findIndex;
    authors.splice(index, 1);
    res.json("el autor fue eliminado");
});
app.put("/autores/:id", validarId, (req, res) => {
    const index = req.params.findIndex;
    authors[index] = req.body; // authours in the specified position (index) is replaced by the information sent (body)
    res.json("el autor fue modificado");
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is up");
})