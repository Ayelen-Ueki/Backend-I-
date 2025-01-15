import fs from "fs"

//Funcion para comprobar la existencia del archivo de logs
const verifyLogFile = async(logPath) => {
    try {
        //igual que fs.exists pero con promesas
        //Con F_OK comprobamos que el archivo existe, con otras siglas podemos comprobar distintas cosas del archivo, por ejemplo R_OK comprueba si es legible
        await fs.promises.access(logPath, fs.constants.F_OK);
        return true;
    } catch (error) {
        return false;
    }
}

//Formato del log = [fecha y hora] +  Tipo de log + Mensaje que vamos a mostrar
//[Fecha y hora] INFO: Servidor iniciado correctamente
const registerLogs = async(typeLog, msgLog) =>{
    const logPath = "./data.log";
    //ISO es la zona horaria global: UTC-0
    const timestamp = new Date().toISOString();
    const logMsg = `[${timestamp}] ${typeLog}: ${msgLog} \n`;

    try {
        const logExists = await verifyLogFile(logPath);
        //Comprobar si el archivo de log existe usando la respectiva funcion
        if(logExists){
            //Si el archivo ya existe le agregamos la info relativa al log
            await fs.promises.appendFile(logPath, logMsg);
        }else{
            //Si el archivo no existe hay que crealo y escribir la informacion relacionada al log
            await fs.promises.writeFile(logPath, logMsg);
        }
    } catch (error) {
        console.error("Error al registrar el log.");
    }
}
registerLogs("INFO", "Se inicio el servidor en el puerto 8080");