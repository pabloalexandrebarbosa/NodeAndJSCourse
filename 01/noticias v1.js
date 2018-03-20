var http= require("http");
http.createServer(function (req, res){

   var categoria=req.url;
console.log(categoria);

    switch (categoria) {
        case "/moda":
             res.end("<html><head><title>Moda???</title></head><body><h4>"+categoria+"</h4></body></html>");
        break;
        case "/ciencia":
             res.end("<html><head><title>Ciencia???</title></head><body><h4>"+categoria+"</h4></body></html>");
        break;
        default:
            res.end("<html><head><title>Respondendo</title></head><body><h4>Oi.......</h4></body></html>");
        break;
    }




}).listen(3001);
