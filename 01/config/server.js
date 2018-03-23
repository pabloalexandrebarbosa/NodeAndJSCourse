var app = require("express")();
var consign = require("consign");

app.set("view engine","ejs");
app.set("views","./app/views");

consign().
    include("app/routes").
        then("config/dbConnection.js").
            into(app);

module.exports=app;