//Clases, plantilla para la creacion de objetos
class Persona{
    //Las propiedades de las clases se definen dentro de un constructor
    constructor (nombre, edad){
        //Propiedades, caracteristicas de nuestra clase. This hace alusion al obeto que esta siendo instanciado por esa clase. 
        this.nombre = nombre
        this.edad = edad
    }
    //Metodos, acciones correspondientes a la clase
    saludar(){
        const mensaje = `Hola! Me llamo ${this.nombre}. Tengo ${this.edad} años.` 
        return mensaje
    }
}

//Creacion de un objeto utilizando nuestra Clase plantilla y asignandole las propiedades correspondientes a ese objeto
const persona1 = new Persona("Ayelen Ueki", 28)

//Los objetos que creemos podran acceder a los metodos de la clase utilizada como plantilla para su creacion 
 console.log(persona1.saludar())