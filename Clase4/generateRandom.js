const generateRandom = () =>{
    const numbers = {};

    for(let i = 0; i < 10000; i++){
    //Math random devuelve numeros del 0 al 0.9
        const randomNumber = Math.ceil(Math.random()*20);
        const numberFind = Object.keys(numbers).find((number)=> number==randomNumber);
        if (numberFind){
            numbers[randomNumber] += 1;
        }else{
            numbers[randomNumber] = 1;
        }
    }
    return numbers
}

console.log(generateRandom());