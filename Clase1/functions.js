//Funciones tradicionales

function sumar (num1, num2){
    return num1 + num2
}

const sumarFlecha = (num1, num2) => {
    return num1 + num2
}

//Las funciones flecha de 1 sola linea tambien pueden escribirse de la siguiente manera ya que las funciones flecha tienen el retorno implicito (es util para los callbacks)

const sumarFlecha2 = (num1, num2) => num1 + num2

console.log(sumar(1,1))

console.log(sumarFlecha(1,2))

console.log(sumarFlecha2(1,3))