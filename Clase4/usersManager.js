import crypto from "crypto";


const secretKey = "miclavesecreta";

class UsersManager {
    //Los atributos y metodos se declaran como estaicos para poder utilizarlos directamente en las clases, sin necesidad de instanciarlos
    static users = [];

    static createUser = (user) =>{
        const hashedPassword = this.hashPassword(user.password);
        const newUser = {...user, password: hashedPassword};
        this.users.push(newUser);
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
}

UsersManager.createUser({
    firstName: "Ayelen",
    lastName: "Ueki",
    username: "ayelenueki",
    password: "123456"
})

UsersManager.createUser({
    firstName: "Maria",
    lastName: "Ueki",
    username: "mariaueki",
    password: "654321"
})

UsersManager.showUsers();

console.log(UsersManager.validateUser("mariaueki", "654321"));