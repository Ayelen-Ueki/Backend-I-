//Operador Exponencial
const precio = 1000;
const tasaInteres = 0.05;
const cuotas = 12;

const totalAPagar = precio * (1 +tasaInteres) ** cuotas;

// El metodos .toFixed sirve para redondear numeros a una menor cantidad de decimales
//console.log(totalAPagar.toFixed(2))


//Array includes: metodo que sirve para comprobar la existencia de elementos dentro de una Array - devuelve TRUE or FALSE

const metodosPago = ["tarjeta", "paypal", "transferencia"];

const metodoUsuario = "criptomonedas";

if (metodosPago.includes(metodoUsuario)){
    console.log("Metodos de pago aceptado")
}else{
    console.log("Metodo de pago invalido")
}