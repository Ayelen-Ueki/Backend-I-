
//Metodos para trabajar con objetos
const carrito = {
    notebook:1,
    mouse:2,
    teclado:1, 
    monitor:1
}

//Para obtener solo las keys del objeto

console.log(Object.keys(carrito))

//Para poder obtener los valores

console.log(Object.values(carrito))

//Para crear un array con subarrays por cada elemento dentro de nuestro objeto

console.log(Object.entries(carrito))


