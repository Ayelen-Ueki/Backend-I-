//Actividad que engloba de ES6 a ES9

//Array con el que vamos a trabajar
const productos = [
    {
        remeras: 3,
        zapatillas: 2,
        ojotas:1
    },
    {
        zapatillas: 1,
        ojotas: 1
    }
]

const lista = [];
let cantidadTotal = 0;

productos.forEach((objetoProductos)=>{
    Object.keys(objetoProductos).forEach((nombreProducto)=>{
        if(lista.includes(nombreProducto)==false){
            lista.push(nombreProducto)
        }
    })

    Object.values(objetoProductos).forEach((cantidad)=>{
        cantidadTotal= cantidadTotal + cantidad
    })

})

console.log(lista)
console.log(cantidadTotal)