//Spread operator

const lista = ["Notebook", "Mouse", "Teclado"];

const listaNueva = ["Monitor", "Impresora"];

//Unimos los 2 arrays. Cons pspread operator copiamos los arrays existentes para generar uno nuevo que contenga los mismos valores que las listas originales. Funciona tambien con objetos
const todosLosProductos = [...lista,...listaNueva];

//console.log(todosLosProductos);

//Rest operator: sirve para agrupar valores. Esto nos permite pasarle a una funcion la cantitdad de valores que yo quiera al utilizarla , sin especificar al declararla

function calcularTotal (...precios){
    //Total es mi acumulador y precio es la variable que voy a usar para recorrer todo el array de precios que se le pasen a la funciton cuando sea llamada
    return precios.reduce((total, precio)=> total + precio, 0)
}

console.log(calcularTotal(100,200,300))