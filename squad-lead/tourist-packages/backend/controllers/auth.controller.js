const sequelize = require("./../config/sequelize");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const signIn = async (req, res) => {
    try {
        let user = await sequelize.query(`SELECT * FROM users WHERE email='${req.body.email}'`,
            {
                type: sequelize.QueryTypes.SELECT
            });
        if (user.length > 0) {
            if (!user || !bcrypt.compareSync(req.body.password, user[0].password)) {
                res.status(500).json({ message: 'Incorrect username or password' });
            } else {
                const data = user[0];
                delete data.password;
                let token = jwt.sign({
                    user: user[0]
                }, process.env.JWTKEY, { expiresIn: (3600 * 24) })
                res.status(200).json({
                    message: "El usuario se logeo correctamente",
                    user: data,
                    token
                })
            }
        } else {
            res.status(500).json({ message: "Tu usuario aun no existe" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}
const signUp = async (req, res) => {
    try {
        let user = await sequelize.query(`SELECT * FROM users WHERE email='${req.body.email}' `,
            {
                type: sequelize.QueryTypes.SELECT
            });
        if (user.length > 0) {
            res.status(500).json({ message: "Tu usuario ya existe" });
        } else {
            req.body.role = "customer";
            req.body.logIn = false;
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            console.log(req.body.password);
            await sequelize.query(`INSERT INTO users VALUES (NULL, '${req.body.name}', '${req.body.lastName}', '${req.body.email}', '${req.body.phoneNumber}', '${req.body.password}', '${req.body.role}', ${req.body.logIn})`,
                {
                    type: sequelize.QueryTypes.INSERT
                });
            res.status(201).json({ message: "El usuario se creo correctamente" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}
module.exports = {
    signIn,
    signUp
}