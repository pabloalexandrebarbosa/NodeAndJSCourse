var app=require("./config/server");
var rotaNoticias=require("./app/routes/noticias")(app);
var rotaForm=require("./app/routes/formulario_inclusao_noticia")(app);
var rotaHome=require("./app/routes/home")(app);

app.listen(3001,function(){

    console.log("Servidor rodando...");

});