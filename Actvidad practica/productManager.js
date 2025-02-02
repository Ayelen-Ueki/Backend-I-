import fs from "fs";

class ProductManager{
    static products = [];
    
    static initialize = async() =>{
        try {
            const fileData = await fs.promises.readFile(this.filePath, "utf-8");
            this.products = JSON.parse(fileData);
            console.log("Datos cargados correctamente.");
        } catch (error) {
            console.error(error)
        }
    }
    
    //Add
    static addProduct = async (title, description, price, thumbnail, code, stock) => {
        try {
            const prodFind = this.products.find((product)=>product.title === title);
            if(!prodFind){
                const id = this.products.length +1;
                const newProduct = {...this.products, id: id};
            }

            await fs.promises.writeFile(this.filePath)

        } catch (error) {
            
        }
    }
    //Search
    //Edit
    //Delete
    constructor(filePath){
        this.filePath = filePath
    }


}