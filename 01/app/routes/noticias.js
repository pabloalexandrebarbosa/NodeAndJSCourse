
module.exports=function(app){


   
    app.get("/noticias",function(req, resp){
        var connection=require("../../config/dbConnection")();

        connection.query("SELECT * FROM NOTICIAS",function(error, result){
            //resp.send(result);
            resp.render("noticias/noticias",{noticias: result});
           
        });
       

    });
}