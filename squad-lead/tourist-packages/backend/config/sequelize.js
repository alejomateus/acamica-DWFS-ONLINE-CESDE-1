const Sequelize = require("sequelize");
const config = {
    "username": "root",
    "password": null,
    "database": "tourist_packages",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
};
const sequelize = new Sequelize(config.database, config.username, config.password, config);
module.exports = sequelize;