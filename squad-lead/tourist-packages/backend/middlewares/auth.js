const jwt = require("jsonwebtoken");
const validationKeyMiddleware = (req, res, next) => {
    let validationKeyValue = req.headers.validationkey;
    if (!validationKeyValue) {
        return res.status(401).json({ message: "debes enviar la key de validacion" });
    } else if (validationKeyValue !== process.env.VALIDATIONKEY) {
        return res.status(401).json({ message: " key de validacion invalida" });
    }
    return next();
}

const validateJWT = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: "Debes enviar el token" })
    }
    try {
        let token = req.headers.authorization;
        jwt.verify(token, process.env.JWTKEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "El token es incorrecto" });
            }
            req.user = decoded;
            return next();
        })
    } catch (error) {
        return res.status(401).json({ message: "El token es incorrecto" })
    }
}


module.exports = {
    validationKeyMiddleware,
    validateJWT
}