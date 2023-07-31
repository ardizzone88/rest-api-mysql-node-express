//importo config de dotenv para poder leer las variables de entorno
import {config} from "dotenv"

config()
//process es un obj global de node - env almacena todas la variables - PORT es una de esas variables
//Creo la const port que va a utilizar lo que viene de process.env.PORT o si no existe utiliza el valor 4000 
export const PORT = process.env.PORT || 4000
export const DB_USER = process.env.DB_USER || "root"
export const DB_DATABASE = process.env.DB_DATABASE || "companydb"
export const DB_HOST = process.env.DB_HOST || "localhost"
export const DB_PORT = process.env.DB_PORT || 3306

export const DB_PASSWORD = process.env.DB_PASSWORD || "newells74##"


console.log(process.env.PORT)
console.log(process.env.DB_USER)
console.log(process.env.DB_DATABASE)

