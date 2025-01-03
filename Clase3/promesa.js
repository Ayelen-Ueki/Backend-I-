// //Para funciones asincronas
// const getUser = new Promise((resolve, reject) => {
//     const isLogged = true;

//     if (isLogged === true){
//         resolve("Devolver datos del usuario")
//     }else{
//         reject("Error, usuario no logueado")
//     }
// })

// //Para consumir la promesa

// getUser
//     .then((response)=>{ 
//         console.log(response)
//      })
//      .catch((error)=>{
//         console.log(error)
//      })

//En caso de que quisiera pasar valores a la Promesa

const getUser = (url) =>{

    return new Promise((resolve, reject) => {
        const isLogged = true;
    
        if (isLogged === true){
            resolve("Devolver datos del usuario")
        }else{
            reject("Error, usuario no logueado")
        }
    })

}


getUser("https://miapi.com")
    .then((response)=>{ 
        console.log(response)
     })
    .catch((error)=>{
        console.log(error)
     })

//Para consumir APIs

fetch("https://fakestoreapi.com/products")
     //El response.json es para que yo pueda leer lo que es retornado, es una operacion asincrona
     .then((response)=> response.json())
     //Para consumir lo que cae dentro del .json tengo que utilizar .then por ser una operacion asincrona
     .then((data)=> console.log(data))
     .catch((error) => console.log(error))
