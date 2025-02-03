import express from "express";
import http from "http";
import {Server} from "socket.io";
import {engine} from "express-handlebars";


//WEBSOCKETS (on socket.io)

//Creacion de servidor de forma explicita
const app = express();
const server = http.createServer(app);
//Input/output de websockets
const io = new Server(server); //Va a manejar las solicitudes de websocket

const PORT = 8080;

//handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars"); //definimos cual sera nuestro motor por default
app.set("views", "./src/views"); //definimos donde van a encontrarse las vistas

app.get("/", (req,res)=>{
    res.render("index");
});

//websockets

io.on("connection", (socket)=>{
    //socket es un objeto que representa la conexion del cliente con el servidor
    console.log("Un nuevo usuario se conecto", socket.id)//id es el id del cliente que se loggea
})

//Como se manejaba anteriormente
// app.listen(PORT, ()=>{
//     console.log("Servidor iniciado correctamente.");
// })

//Las configuraciones del servidor siguen pasando por la variable app

app.use(express.static("public"));

server.listen(PORT, ()=>{
    console.log("Servidor iniciado correctamente.");
})



