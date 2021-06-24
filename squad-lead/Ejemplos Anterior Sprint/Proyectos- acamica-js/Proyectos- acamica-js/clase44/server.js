const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.use(bodyParser.json());

let contact = [];


function log(req, res, next) {
    // {Verbo} - {ruta} - {query strings} - {body} 
    console.log(`verbo: ${req.method} ruta: ${req.path} query: ${JSON.stringify(req.query)} body: ${JSON.stringify(req.body)}`);
    next();
}

function verifyVersion(req, res, next) {
    const { version } = req.query;
    if (version && version > 5) {
        return next();
    } else {
        res.status(422).json({ error: "version not found" });
    }
}

app.post('/contact', log, (req, res) => {
    contact.push(req.body);
    res.json({ message: 'added contact' });
})
app.get('/demo', [log,verifyVersion], (req, res) => {
    res.json({ message: 'hola' })
})

app.listen(port, () => {
    console.log(`Servidor iniciado en puerto ${port}`);
})