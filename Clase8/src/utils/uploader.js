import multer from "multer";
import __dirname from "./dirname.js";
import path from "path";

//Multer es una libreria para el manejao de archivos y debe recibir la ruta absoluta hascia mi archivo
const storage = multer.diskStorage({
    destination:(req, file, callback) => {callback(null, path.join(__dirname, "/public/img"))},
    //Para renombrar el archivo y no repetir el nombre de los archivos accidentalmente
    filename: (req, file, callback) => {callback(null, `${Date.now()}-${file.originalname}`)}
})

//middlewear para recibir archivos
const uploader = multer([storage]);

export default uploader;