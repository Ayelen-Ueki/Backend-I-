import express from "express";

const viewsRouter = express.Router();

//Por proligidad manejamos los endpoints en este archivo en lugar de app.js (en especial cuando hay muchas views)

const users = [
    {name:"Maria", lastname:"Ueki", email:"ayeueki@gmail.com",phone:111536430055, isAdmin: true},
    {name:"Ayelen", lastname:"Ueki", email:"mariaueki@gmail.com", phone:111536430054, isAdmin: true},
    {name:"Kimi", lastname:"Ueki", email:"kimiueki@gmail.com", phone:111536430053, isAdmin: false}
]

//Creamos un endpoint para retornar la vista que hayamos configurado en index
viewsRouter.get("/", (req, res)=>{
    //Generamos un numero aleatorio para recuperar los datos de uno de los 3 usuarios dentro de users 
    const randNumber = Math.floor(Math.random() * users.length); //Esto nos va a generar un numero aleatorio entre 0-3 sin incluir el 3

    const selectedUser = users[randNumber];

    //Solo nos estamos manejando con un motor de plantilla en este caso por lo que no haria falta aclarar cual index usar
    //Podemos tambien enviar objetos como variables hacia la view (index)
    //Podemos enviar tambien variables hacia el layout(en este caso la de title) a la vez que enviamos al index
    //podemos cambiar de layout utilizado indeicando layout:"nombre de layout" dentro del objeto. Por default va a tomar siempre el main
    res.render("index",{selectedUser,users, title: "Home - handlebars"});
})
//endpoint para nuestro formulario ubicato en register.handlebars
viewsRouter.get("/register",(req,res)=>{
    res.render("register",{title:"Register - Handlebars"});

})

//Para recibir la informacion del formulario de register
viewsRouter.post("/user", (req,res)=>{
    //Recibimos todos los inputs del cuerpo de mi formulario
    const {name, lastname, email, phone} = req.body;

    //Pusheamos el nuevo usuario creado a traves del formulario a nuestro array de usuarios. A isAdmin lo dejamos como false por default
    users.push({name, lastname, email, phone, isAdmin:false});
    //Devolvemos nuevamente la lista de usuarios que se muestra en index que deberiamos mostrar eol nuevo usuario agregado con el formulario
    res.redirect("/")
})

export default viewsRouter;