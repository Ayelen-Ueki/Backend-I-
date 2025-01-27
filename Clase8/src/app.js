//TRABAJAMOS CON RUTAS
import express from "express";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";

//Usamos express para poder acceder a un servidor
const app = express();
//Habilitamos json para poder enviar info. en este formato a postman
app.use(express.json());

//Para indicarle a nuestra aplicacion que la carpeta publica puede ser accedida publicamente
app.use(express.static("public"));

//Parea definir la ruta de userRouter con su respectivo manejador de ruta
app.use("/api/users", usersRouter);

//Parea definir la ruta de petsRouter con su respectivo manejador de ruta
app.use("/api/pets", petsRouter);

//Escuchamos el servidor 8080
app.listen(8080, () => {
    console.log("Servidor iniciado en: http://localhost:8080");
})



