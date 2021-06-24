const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mi_base');

const Usuarios = mongoose.model('Usuarios', {
    nombre: String,
    apellido: String,
    edad: Number
});

let datos = {
    nombre: 'jose',
    apellido: 'Martinez',
    edad: 25
}

//  const newUSer = new Usuarios(datos);

//  newUSer.save();

Usuarios.find()
    .then(res => {
        console.log(res);
    });

Usuarios.find({ apellido: 'Martinez' })
    .then(res => {
        console.log(res);
    });

Usuarios.find({ nombre: new RegExp('jo','i') })
    .then(res => {
        console.log(res);
    });