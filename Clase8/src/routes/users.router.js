import express from "express";

//Esta variable va a contener todas las funcionalidades de nuestro Router
const usersRouter = express.Router();


const users = [];

//la ruta de user router va a ser definida en app.js cuando la definamos
usersRouter.get("/",(req,res)=>{
    res.status(200).send(users);
});

usersRouter.post("/",(req,res)=>{
    //La contraseña deberia hashearse primero
    
    const {email, password} = req.body;
    //EL usuario deberia enviarnos esos dos valores si o si
    if(!email, !password) return res.status(400).send({message: "Error al recuperar los datos del usuario"});
    //Pusueamos un nuevo objetos a nuestro array de users
    users.push({email, password});
    res.status(201).send(users);
});

//Exportamos la variable de User Router para poder utilizarla dentro de app.
export default usersRouter;