const sequelize = require("./../config/sequelize");

const signin = async (req, res) => {
    try {

    } catch (error) {

    }
}
const signUp = async (req, res) => {
    try {
        let user = await sequelize.query(`SELECT * FROM users WHERE email='${req.body}' `,
            {
                type: sequelize.QueryTypes.SELECT
            });
        if (user.length > 0) {
            res.status(500).json({ message: "Tu usuario ya existe" });
        } else {
            req.body.role = "customer";
            req.body.logIn = false;
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
    signin,
    signUp
}