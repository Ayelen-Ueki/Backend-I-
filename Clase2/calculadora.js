// Dynamic import (en conjunto con index.js) -> para importacion de formaulas desde otro archivo

//Construimos una clase calculadora a ser exportada que contiene solo metodos
export default class Calculadora{
    suma = (num1, num2) => num1 + num2;
    resta = (num1, num2) => num1 - num2;   
}