import http from "http";

//Creamos un servidor 
const server = http.createServer ((req, res) =>{
    if(req.url==="/"){
        res.writeHead(200, {"Content type" : "text/plain"});//Para aclarar en que estado esta mi respuesta
        //Con response devolvemos una respuesta cuando el request entre al servidor
        res.end("Bienvenido a mi sitio web!"); 
    }else if(req.url==="/about"){ 
        res.writeHead(200, {"Content type":"text/html"});
        res.end(
            `
            <!DOCTYPE html>
            <html>
                <body>
                    <h1> Pagina acerca de <h1>
                </body>
            </html>
            `
        )
    }

})

//Para escuchar los request que lleguen al servidor
server.listen(8080,()=>{
    console.log("Servidor iniciado correctamente.");
}) //No importa mucho el numero de servidor en tanto este disponible