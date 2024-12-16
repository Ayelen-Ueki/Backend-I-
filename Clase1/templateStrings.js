//Es para reemplazar la sintaxis de la concatenacion que utiliza muchos "+"

const cliente = "Maria Ayelen Ueki"

const productos = [
    {id:1, nombre:"notebook", percio:1200, cantidad:1},
    {id:2, nombre: "mouse", precio:200, cantidad:2},
    {id:3, nombre:"teclado", precio:400, cantidad:1}
]

//Funcion para calcular el precio total de la compra

const precioTotal = () => {
    //acumulador
    let total = 0

    productos.forEach((producto) => {
        total = total + producto.precio * producto.cantidad
    })

    return total
}

//temple string -> utiliza `` y ${} para los valores de variables
//OJO que dentro del template string solo podemos utilizar expresiones, por eso el forEach o el If no serian utilizables dentro. El map en cambio si es una expresion que podemos utilizar para iterar nuestro array
const resumenPedido = `
    Pedido de: ${cliente} 
    ${productos.map((p) => `${p.cantidad} x ${p.nombre}: $${p.precio * p.cantidad}`
    )}

    Total: $${precioTotal()}
`

console.log(resumenPedido)