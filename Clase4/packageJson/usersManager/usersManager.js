import crypto from "crypto";
import fs from "fs";

const secretKey = "miclavesecreta";

class UsersManager {
    //Los atributos y metodos se declaran como estaicos para poder utilizarlos directamente en las clases, sin necesidad de instanciarlos
    static users = [];
    //Archivo Json para guardar los datos de los usuarios
    static pathFile = "./users.json";

    static initialize = async() => {
        try {
            const fileData = await fs.promises.readFile(this.pathFile, "utf-8");
            this.users = JSON.parse(fileData);
            console.log("datos cargados correctamente.")
             
        } catch (error) {
            console.error(error);
        }
    }

    static createUser = async(user) =>{
        const hashedPassword = this.hashPassword(user.password);
        const newUser = {...user, password: hashedPassword};
        this.users.push(newUser);
        //Persistir usuarios en json 
        await this.saveUsers();
        console.log("Usuario creado correctamente");
    }

    //Para encriptar la contraseña de los usuarios (para eso importamos crypto)
    static hashPassword = (password) => {
        const hashedPassword = crypto.createHmac("sha256", secretKey).update(password).digest("hex");
        return hashedPassword;
    }

    static showUsers = () => {
        console.table(this.users);
    }

    static validateUser = (username, password) => {
        const userFind = this.users.find((user)=>user.username==username);
        if (!userFind) return "Usuario no encontrado.";

        //Comparar contraseñas
        const hashedPassword = this.hashPassword(password);

        if(userFind.password !== hashedPassword) return "Contraseña incorrecta.";

        return "Loggeado correctamente.";
    }
    //Para guardar los usuarios en el file de JSON
    static saveUsers = async() => {
        try {
           await fs.promises.writeFile(this.pathFile, JSON.stringify(this.users), "utf-8"); 
        } catch (error) {
            console.error("Error al guardar los usuarios en JSON.")
        }
    }
}

const main = async() => {
    await UsersManager.initialize()
    // await UsersManager.createUser({
    //     firstName: "Ayelen",
    //     lastName: "Ueki",
    //     username: "ayelenueki",
    //     password: "123456"
    // })
    
    // await UsersManager.createUser({
    //     firstName: "Maria",
    //     lastName: "Ueki",
    //     username: "mariaueki",
    //     password: "654321"
    // })
    UsersManager.showUsers(); 

}



//console.log(UsersManager.validateUser("mariaueki", "654321"));

main();