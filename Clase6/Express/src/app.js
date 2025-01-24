import express from "express";

//Para manejar todo lo referido al servidor vamos a apoyarnos en el framework de express
const app = express();

app.listen(8080,(req, res)=>{
    res.send ("Hola mundo");
})

app.listen(8080,()=>{
    console.log("Servidor iniciado en puerto 8080.")
})