import express from "express";
import http from "http";
import {Server} from "socket.io";
import {engine} from "express-handlebars";
import viewsRouter from "./routes/views.router.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

//handlebars
app.engine("handlebars",engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//endpoint
app.use("/", viewsRouter);

//websockets
const messages = [];

io.on("connection", (socket)=>{
    console.log("Nuevo usuario conectado");

    socket.on("new user connected", (username)=>{
        //Vamos a emitirle el historial de chat solo al cliente que se acaba de conectar (para no pasarle el historial a todos)
        socket.emit("message history", messages);
        //Notificamos a los usuarios que un nuevo usuario se ha conectado (el nuevo usuario no sera notificado)
        socket.broadcast.emit("show notification new user", username);
    })

    socket.on("chat message",(dataMessage)=>{
        //Pusheamos los mensajes que se van enviando a un array de mensajes
        messages.push(dataMessage);

        io.emit("broadcast new message", dataMessage);
    })
})

const PORT = 8080;

server.listen(PORT,()=>{
    console.log("Servidor iniciado correctamente");
});

