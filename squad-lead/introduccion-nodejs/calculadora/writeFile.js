const fs = require('fs');


escribirArchivo = function (name, content) {
    fs.writeFile(name, content, error => {
        if (error)
            console.log(error);
        else
            console.log('El archivo fue creado');
    });
}
module.exports= escribirArchivo;