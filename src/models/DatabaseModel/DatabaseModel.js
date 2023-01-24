import mysql from 'mysql'
import * as dotenv from 'dotenv' 

dotenv.config()

export class DatabaseModel{
    host = process.env.HOST
    user = 297416
    database = process.env.DATABASE
    password = process.env.PASSWORD
    port = ''
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