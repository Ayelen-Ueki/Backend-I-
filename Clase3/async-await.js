// Mismo ejemplo que promesa.js pero con async/await + try/catch

const getProducts = async() => {

    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data)
        //Para forzar errores 
        throw new Error ("error")
    }catch(error){
        console.log(error)
    }
}

getProducts()