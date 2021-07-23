const Sequelize = require("sequelize");
const config = {
    "username": "root",
    "password": null,
    "database": "acamica",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
  }
const sequelize = new Sequelize(config.database, config.username, config.password, config);

let connect = async () => {
    try {
        const data = await sequelize.authenticate();
        console.log(data);
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connect();
sequelize.query('SELECT * FROM users', {
    type: sequelize.QueryTypes.SELECT
}).then((res)=>{
    console.log(res);
})