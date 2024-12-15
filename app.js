const students = []

function addStudent(name){
    //validar que el nombre no tenga numeros
    if(/\d/.test(name)){
        console.error("Error: el nombre " + name + " no es valido")
        //En Javascript cuando retornamos algo en la funcion se corta
        return
    }
    //Solo para el ejemplo vam,os a crear el Id en base al largo del array de students
    const id = students.length + 1 
    //Guardamos el id y el nombre del nuevo estudiante    
    students.push({id, name})

    console.log("Alumno " + name + " agregado exitosamente con ID " + id)
} 

function deleteStudentById(id){
    //Hay que encontrar la posicion del alumno que queremos eliminar. Para eso vamos a usar un callback que se va a ejecutar 1 vez por cada estudiante en el array 
    const index = students .findIndex((student)=> student.id === id)
    //La function splice sirve para aislar un objeto en un array, indicando la posicion en la que se encuentra en ese array, la cantidad de datos que queremos eliminar y la posicion del dato que queremos retornar con ese splice
    const deleteStudent = students.splice(index, 1)[0]
    console.log("Alumno " + deleteStudent.name + " eliminado con exito.")
}

function showStudents(){

}

//Testing the addStudent function
addStudent("Maria")

addStudent("Ayelen")

//Testing the deleteStudentById
deleteStudentById(2)