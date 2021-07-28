/** Aqui asignamos a una constante llamada 
 * express la libreria de express por medio 
 * del metodo require */
const express = require("express");
/**
 * Asignamos a una variable el valor de express 
 * y su uso para obtener y poder llamar a
 * todas sus funciones y propiedades
 */
const app = express();
/**
 * Asignamos a una variable llamada helmet el valor 
 * del paquete helmet
 */
const helmet = require("helmet");
/**
 * rateLimit es un paquete que te permite limitar 
 * el numero de llamado a los endpoints durante
 * un tiempo para evitar ataques de fuerza bruta
 */
const rateLimit = require("express-rate-limit");
/**
 * cors es un paquete que permite conectar aplicaciones
 * locales con servidores locales o externos
 */
const cors = require("cors");

/**
 * Usamos el paquete helmet como middleware global
 * recuerda que un middleware es un interceptador
 * que verifica las peticiones antes de que se llegue 
 * a los datos, para verificar si continua o para
 * el proceso de ejecucion
 */
app.use(helmet());
/**
 * JWT es una libreria que permite crear una llave
 * cifrada de autenticacion para verificar si un
 * usuario tiene acceso al sistema
 */
const jwt = require("jsonwebtoken");
/**
 * Declaro una constante llamada key que sera la llave
 * del cifrado que nos generara el token de autenticacion
 */
const key = "acamica";
/**
 * Usamos la funcion express.json para poder 
 * obtener los datos del request body que 
 * son los datos para que se pueda crear 
 * o actualizar alguna informacion
 */
app.use(express.json());
/**
 * Uso del middleware
 */
app.use(cors());
/**
 * Creamos un objeto de repuesta en donde 
 * identificamos el codigo Http de respuesta
 * https://code.tutsplus.com/es/tutorials/a-beginners-guide-to-http-and-rest--net-16340
 */
let getResponseObject = (code, message, data = []) => {
    return {
        code,
        message,
        data
    };
}
/**
 * Declaramos una variable de tipo array con
 * varios objetos de tipo user que permiten 
 * simular un listado de usuarios.
 */
let users = [
    {
        id: 1023013040,
        name: "Alejandro",
        lastname: "Jimenez",
        email: "alejo.mateus.ud@gmail.com",
        phoneNumber: "3143720783",
        password: "Alejo@123456",
        role: "admin",
        logged: false
    },
    {
        id: 1023013041,
        name: "Alejandro",
        lastname: "Jimenez",
        email: "alejo.mateus.ud1@gmail.com",
        phoneNumber: "3143720783",
        password: "Alejo@123456",
        role: "customer",
        logged: false
    },
    {
        id: 1023013042,
        name: "Alejandro",
        lastname: "Jimenez",
        email: "alejo.mateus.ud2@gmail.com",
        phoneNumber: "3143720783",
        password: "Alejo@123456",
        role: "customer",
        logged: false
    }
];
/**
 * Declaramos una lista de cuentas de los usuarios actuales
 * para poder realizar transferencias y asignacion de 
 * montos como perfil de administrador
 */
let accounts = [
    {
        userId: 1023013040,
        accountId: 1,
        amount: 1000000
    },
    {
        userId: 1023013041,
        accountId: 2,
        amount: 1000000
    },
    {
        userId: 1023013042,
        accountId: 3,
        amount: 1000000
    }
];
/**
 * Se crea una constante que tiene al estructura para limitar
 * por un periodo de una hora el numero de peticiones o 
 * request que se pueden hacer para autenticar a un usuario 
 */
const checkLimite = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 50,
    message:
        "Supero el limite de 5 requests por hora, espera una hora para volver a comenzar"
});
/**
 * validar si un usuario tiene un JWT 
 * correcto y sus parametros
 */
let validateJWT = (req, res, next) => {
    if (!req.headers.authorization) {
        const response = getResponseObject(500, "Debes enviar el token");
        res.status(response.code).json(response);
    }
    try {
        let token = req.headers.authorization;
        jwt.verify(token, key, (err, decoded) => {
            if (err) {
                const response = getResponseObject(500, "El token es incorrecto");
                res.status(response.code).json(response);
            }
            req.user = decoded;
            next();
        })
    } catch (error) {
        const response = getResponseObject(500, "Debes enviar el token correcto");
        res.status(response.code).json(response);
    }
};
/**
 * Se crea una funcion como middleware que valida si los 
 * datos enviados son correctos para poder autenticar a un
 * usuario
 */
let validateRequestLogin = (req, res, next) => {
    if (req.body.id && req.body.password) {
        if (validatePassword(req.body.password)) {
            next();
        } else {
            const response = getResponseObject(500, "La contraseña esta incorrecta, debe contener una mayuscula, una minuscula, un numero, un caracter especial y debe ser mayor a 6 digitos");
            res.status(response.code).json(response);
        }
    } else {
        let response = getResponseObject(500, "Debe ingresar los datos correctamente");
        res.status(response.code).json(response);
    }
}
/**
 * Funcion para validar la estructura de un email
 * usando una expresion regular
 */
let validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
/**
 * Funcion para validar la estructura de una contraseña
 * usando una expresion regular
 */
let validatePassword = (password) => {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^.&*])[a-zA-Z0-9!@#$%^&*]{6,50}$/;
    return re.test(password);
}
/**
 * Se crea una funcion como middleware que valida si los 
 * datos enviados son correctos para poder registrar a un
 * usuario dentro del sistema
 */
let validateRequestSignUp = (req, res, next) => {
    if (req.body.id
        && req.body.password
        && req.body.name
        && req.body.lastname
        && req.body.email
        && req.body.phoneNumber) {
        if (validateEmail(req.body.email) && validatePassword(req.body.password)) {
            next();
        } else {
            const response = getResponseObject(500, "El email o contraseña estan incorrectos");
            res.status(response.code).json(response);
        }
    } else {
        const response = getResponseObject(500, "Debe ingresar los datos correctamente");
        res.status(response.code).json(response);
    }
}
/**
 * Middleware para validar si un usuario este logeado
 */
let validarUsuarioLoggeado = (req, res, next) => {
    let userLogged = users.find((user) => (user.id == req.user.id));
    let response;
    if (userLogged && userLogged.logged === true) {
        next();
    } else {
        response = getResponseObject(500, "El usuario aun no esta logeado");
        res.status(response.code).json(response);
    }
}
/**
 * Middleware para validar si el usuario es administrador
 */
let validarSiAdmin = (req, res, next) => {
    let userLogged = users.find((user) => (user.id == req.user.id));
    let response;
    if (userLogged && userLogged.role === "admin") {
        next();
    } else {
        response = getResponseObject(500, "Usted no tiene permisos para hacer esta operacion");
        res.status(response.code).json(response);
    }
}
/**
 * Aqui creamos nuestras primeras apis con los metodos de
 * tipo Http (GET->Obtener, POST->Crear, PUT->Actualizar, DELETE->Eliminar)
 * https://yosoy.dev/peticiones-http-get-post-put-delete-etc/
 */

/**
 * Buscamos el metodo post que es una funcion que recibe 2
 * a 3 parametros, el primero es la url que sera el adjetivo
 * de lo que queremos buscar y luego una funcion de tipo 
 * flecha arrow Function que ejecutara y buscara parametros 
 * para completar el request. En este caso el login verificara
 * si un usuario existe y lo dejare autenticado, a veces
 * implementamos un middleware para validar los datos de request
 * https://medium.com/@khriztianmoreno/funciones-sobre-arreglos-que-debes-conocer-en-javascript-bae9d9ff8e52
 */
app.post("/login", [checkLimite, validateRequestLogin], (req, res) => {
    let userLogged = users.findIndex((user) => (user.id == req.body.id && user.password == req.body.password));
    let response;
    if (userLogged == -1) {
        response = getResponseObject(500, "Identificación o contraseña incorrectos");
    } else {
        users[userLogged].logged = true;
        let data = JSON.parse(JSON.stringify(users[userLogged]));
        delete data.password;
        delete data.logged;
        // delete data.role;
        const token = jwt.sign(data, key, { expiresIn: 3600 });
        response = getResponseObject(200, "El usuario esta logeado correctamente", { token, user: data });
    }
    res.status(response.code).json(response);
});
/**
 * Request para registrar un nuevo usuario
 */
app.post("/signup", validateRequestSignUp, (req, res) => {
    let userLogged = users.find((user) => (user.id == req.body.id));
    let response;
    if (userLogged) {
        response = getResponseObject(500, "El usuario ya esta registrado");
    } else {
        req.body.role = "customer";
        req.body.logged = false;
        users.push(req.body);
        accounts.push({
            userId: req.body.id,
            accountId: (users.length + 1),
            amount: 0
        })
        response = getResponseObject(200, "El registro esta completo ahora ingresa");
    }
    res.status(response.code).json(response);
});
/**
 * Buscamos el metodo get que es una funcion que recibe 2
 * a 3 parametros, el primero es la url que sera el adjetivo
 * de lo que queremos buscar y luego una funcion de tipo 
 * flecha arrow Function que ejecutara y buscara parametros 
 * para completar el request.
 * 
 * Este metodo lista las cuentas de los usuarios
 */
/**
 * Request para listar las cuentas del sistema
 */
app.get("/accounts/list", [validateJWT, validarUsuarioLoggeado], (req, res) => {
    response = getResponseObject(200, "Listado de cuentas", accounts);
    // response = getResponseObject(200, "Listado de cuentas", accounts.filter(account => account.userId != req.user.id));
    res.status(response.code).json(response);
});
/**
 * Request para asignar valor a las cuentas
 * se envia un parametro por path que es el accountId
 * y por query el monto que se le va asignar
 */
app.put("/accounts/assign-amount/:accountId", [validateJWT, validarUsuarioLoggeado, validarSiAdmin], (req, res) => {
    let accountSelected = accounts.find((account) => account.accountId == req.params.accountId);
    if (accountSelected) {
        accountSelected.amount = Number(req.query.amount);
        response = getResponseObject(200, "Monto actualizado", accountSelected);
    } else {
        response = getResponseObject(500, "La cuenta no existe");
    }
    res.status(response.code).json(response);
});
/**
 * Transferencia entre cuentas
 */
app.post("/accounts/transfer", [validateJWT, validarUsuarioLoggeado], (req, res) => {
    let accountOrigin = accounts.find((account) => account.userId == req.user.id);
    let accountDestination = accounts.find((account) => account.accountId == req.body.accountDestination);
    if (accountOrigin && accountDestination) {
        if (req.body.amount <= accountOrigin.amount) {
            accountOrigin.amount = accountOrigin.amount - Number(req.body.amount);
            accountDestination.amount = accountDestination.amount + Number(req.body.amount);
            response = getResponseObject(200, "Transferencia exitosa", accountOrigin);
        } else {
            response = getResponseObject(500, "El monto sobrepasa el valor de tu cuenta");
        }
    } else {
        response = getResponseObject(500, "Alguna de las cuentas no existe");
    }
    res.status(response.code).json(response);
})
/**
 * Como le asignamos a la variable app
 * los metodos y funciones de express usamos
 * la funcion listen para que el servidor este
 * escuchando las peticiones que van llegando a
 * nuestro servidor
 */
let port = 3000;
app.listen(port, () => {
    console.log("Iniciando el servidor on port ..." + port);
});