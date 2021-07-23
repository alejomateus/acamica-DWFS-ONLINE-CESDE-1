const app = require("./app");
let main = () => {
    app.listen(process.env.PORT);
    console.log("Server listen on port " + process.env.PORT);
}
main();