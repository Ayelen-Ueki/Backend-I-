//CALCULADORA con promesas

const sum = (num1,num2) => {
    return new Promise ((resolve,reject)=>{
        if(num1 === 0 || num2 === 0){
            //Los rejects son considerados errores cuando los callbacks son consumidos
            reject("Operacion innecesaria")
        }else{
            const result = num1 + num2;
            if(result<0){
                reject("La calculadora solo debe devolver resultados positivos");
            }else{
                resolve(result);
            }
        }
    })
}

const resta = (num1, mum2) => {
    return new Promise ((resolve,reject)=>{
        //Mismo que suma pero con un approach diferente
        if(num1 === 1 || num2 ===0) reject("Operacion innecesaria");
        const result = num1 - num2;
        if (result < 0 ) reject("La calculadora solo debe devolver resultados positivos")
        resolve(result);
    })
}

const calculos = async() =>{
    try{
        //Hay que esperar el resultado de la otra funcion por lo que hay que agregar un await
        const resultadoSuma = await sum (1,-2);
        console.log(`Resultado suma: `, resultadoSuma)
    }catch(error){
        console.log(error)
    }
}

calculos()