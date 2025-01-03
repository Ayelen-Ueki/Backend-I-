//ACTIVIDAD

class TicketManager {
    //Declaracion de variable privada con #
    #precioBaseDeGanancia = 0.15;
    #eventos = [];

    //Otra forma de declarar el valor de nuestras variables, en caso de que este tomara valores de argumentos al ser llamada la clase por ejemplo
    // constructor(){
    //     this.#precioBaseDeGanancia = 0.15
    //     this.#eventos = []
    // }

    //Metodo para ver los eventos disponibles
    getEventos(){
        return this.#eventos;
    }
    //Metodo para agregar nuevos eventos
    agregarEventos (nombre, lugar, precio, capacidad = 50, fecha = new Date().toLocaleDateString()){
        const id = this.#eventos.length + 1; 
        //Pusheamos a eventos todas las propiedades que se pasaran al agregar eventos
        this.#eventos.push({
            id, 
            nombre,
            lugar,
            precio : (precio * (1 + this.#precioBaseDeGanancia)).toFixed(2), 
            capacidad, 
            fecha,
            participantes : []
        })
        return "Evento agregado exitosamente"
    }
}

//No hace falta agregar parentesis a la clase porque esta no va a recibir ningun tipo de argumento
const ticketek = new TicketManager;

console.log(ticketek.getEventos());
console.log(ticketek.agregarEventos("Evento1", "AJE", 5000))
console.log(ticketek.getEventos());


