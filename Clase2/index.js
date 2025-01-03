// Dynamic import (en conjunto con calculadora.js) -> para importacion de formaulas desde otro archivo
// Los dynamic imports nos permiten importar recursos solo cuando seran utilizados para aligerar la carga en el servidor de importar todo
// Importamos los metodos de la clase que creamos en calculadora.js

let modo = "calculos";

const calculadora = async() => {
    //Si mi modo coincide se hara el import
    if (modo =="calculos"){
        //El import es asincrono, no se hace de forma inmediata
        //Recivimos el import dentro de un objeto
        //Me llega el import dentro de la palabra reservada default porque en calculadora.js hicimos i¥un export default... si hicieramos un export con un nombre declarado deveriamos usar ese nombre
        const {default : Calculadora} = await import ("./calculadora.js");

        let calculadoraCientifica = new Calculadora;

        console.log (calculadoraCientifica.suma(1,2));

    }
}

calculadora();