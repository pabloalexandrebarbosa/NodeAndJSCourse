var app = require("express")();
app.set("view engine","ejs");
app.set("views","./app/views");
app.databaseConnection=function(){

    var mysql= require("mysql");
    var connection =mysql.createConnection({
        host:"localhost",
        port:3306,
        user: "root",
        password:"admin",
        database:"portalnoticias"
    });
  return  connection;
}
module.exports=app;