//Este archivo va a manejar las solicitudes del lado del cliente

//Iniciamos la conexion desde el lado del cliente
const socket = io(); //No tenemos que importar socket.io en este caso porque estamos manejando todo desde index.handlebars

//Emitir evento. Tenemos que asignarle un nombre y la informacion a emitir
//socket.emit("chat message", "Hola! Saludos desde el cliente web.");

//Escuchamos los eventos del servidor - Recibimos el historial de mensajes (solo se hace 1 vez al inicio)
socket.on("welcome", (messages)=>{
    //Capturamos el chatbox, que es donde se muestran los mensajes en el html
    const chatbox = document.getElementById("chatbox");
    messages.forEach(({id,message}) => { //Desestructuracion de las propiedades del array de messages
        //Mostramos los mensajes en el html
        chatbox.innerHTML += `<p> ${id}: ${message} </p>`
    });
})

//Manejo de formulario para el chat
//necesitamos capturar informacion hrml desde JavaScript
const formChat = document.getElementById("formChat");
const inputMessage =  document.getElementById("inputChat");

//Escuchamos eventos del navegador (en este caso cuando se envie el formulario)
formChat.addEventListener("submit", (event)=>{
    event.preventDefault(); //Para evitar que al enviar el formulario se recarge la pagina por defecto
    const newMessage = inputMessage.value;
    inputMessage.value = "";//Para que se resetee

    socket.emit("chatMessage",newMessage);
})

//Recibimos el mensaje enviado por uno de los clientes a todos los clientes
socket.on("broadcastMessage", ({id, message})=>{
    const chatbox = document.getElementById("chatbox");
    //insertamos una nueva etiqueta html con el mensaje que recibimos
    chatbox.innerHTML += `<p> ${id}: ${message} </p>`
})