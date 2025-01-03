//Para recortar espacios al principio y al final de un string
const nombre = " Maria Ayelen ";

console.log(nombre.trim());

//Para sacar los numeros de los sub Arrays pusarmos .flat. Podemos aclarar entre parentesis la cantidad de niveles de sub arrays que hay dentro de un array 
const num = [1, [2,3], [4,5]];
const result = num.flat();

console.log(result);

