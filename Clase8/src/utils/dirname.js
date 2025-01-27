//Aca se va a definir la ruta absoluta donde se van a guardar los archivos que quiero uploader

//Funcionalidad para crear la ruta absoluta a mis archivos 

import path from "path";
import { fileURLToPath } from "url";

//Con lo siguiente obtenemos la ruta completa al archivo donde estamos actualmente
const pathFile = fileURLToPath(import.meta.url);

//Limpiamos la ruta, o sea, le sacamos el nombre del archivo en si, con los cual queda la ruta absoluta hacia la carpeta utils
const pathUtils = path.dirname(pathFile);

//Para crear la ruta absoluta hacia todo mi proyecto, y no solo hacia la carpeta de utils, para lo cual deberiamos salir 2 carpetas hacia atras hacia la raiz del proyecto

const __dirname = path.resolve(pathUtils, "../../")

//Las variables precedidas por doble _ son las globales
export default __dirname;