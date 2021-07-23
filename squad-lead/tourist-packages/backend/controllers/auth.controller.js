const sequelize = require("./../config/sequelize");

const login = async (req, res) => {
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
        }
    } catch (error) {

    }
}
module.exports = {
    login,
    signUp
}