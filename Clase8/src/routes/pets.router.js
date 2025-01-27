import express from "express";
import uploader from "../utils/uploader.js";

const petsRouter = express.Router();

const pets = [];

//El middleware va a servir como un filtro antes de que se ejecute la funcion principal
const middlewareGetPets = (req, res, next) =>{
    console.log("Ejecutando middleware.");
    //El next indica que se ejecute la funcion principal al finalizar la ejecucion del middleware
    next();
}

petsRouter.get("/",middlewareGetPets, (req, res)=>{
    //enviamos las mascotas en caso exitoso
    res.status(200).send(pets);
});

//Ejecutamos el middleware antes de que se ejecute la funcion principal
//"File" sera el nombre que se utilice para hacer referencia al archivo que, por ejemplo, se subira mediante el formulario
petsRouter.post("/",uploader.single("file"), (req, res)=>{
    //Comprobamos que se suba el archivo
    if(!req.file) return res.status(400).send({message: "Error al recuperar la imagen"});

    //Vamos a recibir la informacion del nombre y la edad de la mascota desde el body de request
    const{name, age} = req.body
    //Variable para definir la ruta relativa al archivo que se suba 
    const pathImage = "/img/" ; req.file.filename;

    if (!name, !age) return res.status(400).send({message: "Error al recuperar los datos de la mascota."});

    //Pusheamos tanto el nombre, la edad de la mascota y la imagen que se suba al formulatio a partir de su ruta relativa
    pets.push({name, age, thumbnail: pathImage});
    res.status(201).send(pets);
});

export default petsRouter; 