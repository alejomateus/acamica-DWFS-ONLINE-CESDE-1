const { dwfs, dwa, bigdata } = require('./datos');

function returnDatos(comision) {
    switch (comision) {
        case "dwfs":
            return dwfs;
            break;
        case "dwa":
            return dwa;
            break;
        case "bigdata":
            return bigdata;
            break;
    }
}

function returnNames(comision, nombre) {
    let json = [];
    switch (comision) {
        case "dwfs":
            dwfs.forEach(el => {
                if (el.name == nombre) {
                    json.push(el);
                }
            });
            break;
        case "dwa":
            dwa.forEach(el => {
                if (el.name == nombre) {
                    json.push(el);
                }
            });
            break;
        case "bigdata":
            bigdata.forEach(el => {
                if (el.name == nombre) {
                    json.push(el);
                }
            });
            break;
    }
    if (json.length == 0) {
        json.push({
            error: 'alumno no econtrado'
        })
    }
    return json;
}

module.exports = { returnDatos, returnNames } 