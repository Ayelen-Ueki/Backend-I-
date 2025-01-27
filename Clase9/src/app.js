//HANDLEBARS
import express from "express";
import { engine } from "express-handlebars";
//Importamos viewsRouter para traernos los distintos endpoints de nuestras views
import viewsRouter from "./routes/views.router.js";

const app = express();
//Para poder enviar informacion que no solo sea de texto
app.use(express.urlencoded({extended:true}));

//Definimos a public como carpeta publica 
app.use(express.static("public"));

//Aca declaramos que handlebars va a ser uno de los motores de plantilla que vamos a usar 
app.engine("handlebars", engine());

//Indicar que handlebars va a ser el motor de plantilla predeterminado
app.set("view engine", "handlebars");
//indicamos la ruta a la view que queremos mostrar
app.set("views", "./src/views");

//endpoint 
app.use("/", viewsRouter);

app.listen(8080,()=>{
    console.log("servidor iniciado en: http://localhost:8080");
})

