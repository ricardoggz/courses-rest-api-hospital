import mysql from 'mysql'
import * as dotenv from 'dotenv' 

dotenv.config()

export class DatabaseModel{
    host ='localhost'
    user ='root'
    database ='cursos'
    password =''
    port =3306
    pool
    constructor(){
        this.pool = new mysql.createPool({
            host: this.host,
            user: this.user,
            database : this.database,
            password: this.password,
            port: this.port
        })
    }
}