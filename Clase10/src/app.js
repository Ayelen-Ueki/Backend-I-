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

const messages = []; //Array de mensajes para guardar el historial del chat

//websockets

//Tiene que llamarse si o si "connection"
io.on("connection", (socket)=>{
    //socket es un objeto que representa la conexion del cliente con el servidor
    console.log("Un nuevo usuario se conecto", socket.id)//id es el id del cliente que se loggea

    //Podemos emitir eventos del lado del servidor hacia el cliente
    socket.emit("welcome", messages);
    
    //Escucho los eventos que emite el cliente
    socket.on("chatMessage", (newMessage)=>{
        const message = {id: socket.id, message:newMessage}; //Creamos una variable con el id de quien esta enviando el mensaje y el mensaje enviado
        messages.push(message);

        //Para pasar el mansaje del servidor a TODOS los clientes
        io.emit("broadcastMessage", message)//En lugar de socket.emit
    }); //Socket.on se utiliza para escuchar eventos

    //Escuchamos cuando se desconecta el cliente
    //Tiene que llamarse si o si disconnect
    socket.on("disconnect",(reason)=>{
        console.log(`Cliente desconectado: ${reason}`);
    });
    //Razones para la desconexion:
        //transport close: cierre de conexion
        //ping timeout: falta de internet-la conexion del cleinte no responde al servidor
        //server namespace disconnect: cuando el servidor desconecta al cliente
            //esto ultimo s ehace con socket.disconnect(true)
})

//Como se manejaba anteriormente
// app.listen(PORT, ()=>{
//     console.log("Servidor iniciado correctamente.");
// })

//Las configuraciones del servidor siguen pasando por la variable app

app.use(express.static("public"));

server.listen(PORT, ()=>{
    console.log("Servidor iniciado correctamente.");
});




