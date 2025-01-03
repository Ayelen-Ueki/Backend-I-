// Un callback es una funcion que se pasa como argumento a otra funcion y suele ejecutarse al final

function saludar (nombre, callback){
     console.log (`Hola, ${nombre}`);
     callback();
}

function despedir(){
    console.log ("Adios");
}

//Cuando pasamos una funcion a otra solo pasamos la referencia a la funcion, no la funcion ejecutandose (o sea, la pasamos sin los parentesis)
saludar("Ayelen", despedir);

//Ejemplo con MAP
//Todos los metodos de array reciben un callback que es una funcion anonima

let arrayNumeros = [1,2,3,4,5];

//let nuevoArray = arrayNumeros.map((numero)=>numero + 1);

//Podriamos usar un callback en lugar de escribir directamente la funcion dentro del map

const funcionCallback = (numero) => {
    if (numero % 2 === 0){
        return numero;
    }else {
        return "no es par"
    }
}

let nuevoArray = arrayNumeros.map(funcionCallback);

console.log(nuevoArray)