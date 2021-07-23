const authRoutes = require("./auth");

const routes = (app) =>{
    app.use('/auth', authRoutes);
}
module.exports = routes;