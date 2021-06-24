const router = require('express').Router();
const { returnDatos, returnNames } = require('./modelo');

router.get('/:comision/alumnos', (req, res) => {
    const { nombre } = req.query;
    const comision = req.params.comision;
    if (comision == "dwfs" || comision == "dwa" || comision == "bigdata") {
        if (!nombre) {
            res.json(returnDatos(comision));
        } else {
            const data = returnNames(comision, nombre);
            (data[0].error) ? res.statusCode = 404 : res.statusCode = 200;
            res.json(data);
        }
    } else {
        res.statusCode = 400;
        res.json({ error: "bad request" });
    }
})

module.exports = router;