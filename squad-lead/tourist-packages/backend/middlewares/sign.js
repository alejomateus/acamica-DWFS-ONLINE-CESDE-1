let validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

let validatePassword = (password) => {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^.&*])[a-zA-Z0-9!@#$%^&*]{6,50}$/;
    return re.test(password);
}
let validateSignUpRequest = (req, res, next) => {
    if (req.body.name
        && req.body.lastName
        && req.body.email
        && req.body.phoneNumber
        && req.body.password) {
        if (validateEmail(req.body.email)
            && validatePassword(req.body.password)) {
            next();
        } else {
            return res.status(400).json({
                message: "El email o la contraseña son incorrectos"
            })
        }
    } else {
        return res.status(400).json({
            message: "Debe ingresar los datos correctamente"
        })
    }
}

let validateSignInRequest = (req, res, next) => {
    if (req.body.email
        && req.body.password) {
        if (validateEmail(req.body.email)
            && validatePassword(req.body.password)) {
            next();
        } else {
            return res.status(400).json({
                message: "El email o la contraseña son incorrectos"
            })
        }
    } else {
        return res.status(400).json({
            message: "Debe ingresar los datos correctamente"
        })
    }
}
module.exports = {
    validateSignInRequest,
    validateSignUpRequest
}