//Para manejar laas rutas de las vistas que vamos a estar renderizando
import express from "express";

const viewsRouter = express.Router();

viewsRouter.get("/",(req,res)=>{
    res.render("index");
})

export default viewsRouter;