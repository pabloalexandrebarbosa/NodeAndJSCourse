module.exports=function(app){

    app.get("/form",function(req, resp){

        resp.render("admin/form_add_noticia");
    
    });

}

