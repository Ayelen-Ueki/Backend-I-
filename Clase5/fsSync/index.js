import { create } from "domain";
import fs from "fs";
import path from "path";

//Crear archivo para el guardado de informacion

const readFile = (pathFile) =>{
    try{
        const data = fs.readFileSync(pathFile, "utf-8");
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

const writeFile = (pathFile) =>{
    try {
        //Sobreescribe la informacion del archivo y lo crea si el archivo aun no existe
        fs.writeFileSync(pathFile,"Nuevo contenido")
        console.log("Archivo modificado correctamente.")
    } catch (error) {
        console.log(error)
    }
}

//Para agregar data en un archivo
const appendFile = (pathFile) =>{
    try {
        fs.appendFileSync(pathFile,"\nNueva linea")
    } catch (error) {
        console.log(error)
    }
}
//Para eliminar un archivo
const deleteFile=(pathFile)=>{
try {
    fs.rmSync(pathFile)
    console.log("Archivo eliminado.")
} catch (error) {
    console.log(error)
}
}
//Para renombrar un archivo
const renameFile =(pathFile,newPathFile)=>{
    try {
        fs.renameSync(pathFile,newPathFile);
        console.log("Archivo renomabrado con exito.")
    } catch (error) {
        console.log(error)
    }
}

const getStats=(pathFile)=>{
    try {
        const stats = fs.statSync(pathFile);
        console.log(stats)
    } catch (error) {
        console.log(error)
    }
}
//Comprobar si un file existe
const existsFile = (pathFile) =>{
    if(fs.existsSync(pathFile)){
        console.log("El archivo existe.")
    }else{
        console.log("El archivo no existe.")
    }
    
}

//Crear carpeta nueva
const createDirectory = (pathDirectory) =>{
    try {
        fs.mkdirSync(pathDirectory)
        console.log("Directorio creado")
    } catch (error) {
        console.log(error)
    }
}

//Para eliminar una carpeta
const deleteDirectory = (pathDirectory) =>{
    try {
        fs.rmdirSync(pathDirectory);
        console.log("Directorio eliminado.")
    } catch (error) {
        console.log(error)
    }
}


readFile("./texto.txt");
writeFile("./texto.txt");
appendFile("./texto.txt");
existsFile("./text.txt");
renameFile("./texto.txt","./text.txt");
getStats("./text.txt");
createDirectory("./assets");
deleteDirectory("./assets")