import fs from "fs"
import path from "path";
import { setInterval } from "timers";

const getDate = () =>{
    try {
        const pathFile = "./date.txt";
        let count = 0;

        const intervalId = setInterval(()=>{
            const date = new Date().toLocaleTimeString();
            
            if(fs.existsSync(pathFile)){
                fs.appendFileSync(pathFile,"\n" + date)
            }else{
                fs.writeFileSync(pathFile, date);
            }

            count ++ ;
            if(count === 10){
                clearInterval(intervalId);
            }
        },1000);

    } catch (error) {
        console.log(error)
    }
}

getDate();