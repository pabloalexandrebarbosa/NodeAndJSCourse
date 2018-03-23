var mysql= require("mysql");

var dbConnection = function(){


    return mysql.createConnection({
        host:"localhost",
        port:3306,
        user: "root",
        password:"admin",
        database:"portalnoticias"
    });
  

}

module.exports= function(){
    console.log("Carregou o modulo de conexao com o banco de dados mysql...")
    return dbConnection;
};