const socket = io();

//SWEETALERT
//Para pedirle al cliente su nombre de usuario antes de que pueda ingresar al chat
//Puedo usar Sweet alert directamente aca ya que ya lo importamos en el index.handlebars
const getUsername = async() =>{
    //Definimos la funcion como asincrona por si el usuario demora en ingresar su username
    const data = await Swal.fire({ //Guardamos el nombre de usuario en una variable
        title: "Ingresa tu nombre de usuario",
        input:"text",
        inputLabel:"Este nombre se utilizara en el chat",
        //Esta opcion hace que hasta que no se complete el input impida al cliente ingresar
        allowOutsideClick:false,
        inputValidator: (username) =>{
            if(!username) return "Es obligatorio ingresar un nombre de usuario";
        }
    })
    //retornamos el nombre de usuario
    return data.value;
};

//Para mostrar que un nuevo usuario se ha conectado 
const newUserConnected = () =>{
    Swal.fire({
        toast: true, //Para que se convierta en una notificacion
        position: "top-end",
        icon: "success",
        title: `${username} conectad@`,
        showConfirmButton: false, //Para que no nos muestre ningun boton de confirmacion
        timer: 2000 //Para que la notificacion aparezca por 2 segundos
    })
}

//Para ejecutar lo de arriba 

const main = async() =>{
    const username = await getUsername();
    //Cuando un nuevo usuario se conecte emitimos el evento correspondiente
    socket.emit("new user connected", username);

    //Recimos el historial de mensajes
    socket.on("message history", (messages)=>{
        const chatbox = document.getElementById("chatbox");
        messages.array.forEach(({username, message}) => {
            chatbox.innerHTML += `<p> ${username}: ${message} </p>`
        });
    });

    socket.on("show notification new user", (username)=>{
        newUserConnected(username);
    });

    const formChat = document.getElementById("formChat");
    const inputChat = document.getElementById("inputChat");

    formChat.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = inputChat.value;

        inputChat.value = "";

        socket.emit("chat message", {username, message})
    });
    
    socket.on("broadcast new message", ({username, message})=>{
        //Enviamos los mensajes al html
        const chatbox = document.getElementById("chatbox");
        chatbox.innerHTML+=`<p> ${username}: ${message} </p>`
    });
};

main();