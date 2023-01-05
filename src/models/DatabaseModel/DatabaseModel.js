import mysql from 'mysql'

export class DatabaseModel{
    host = 'localhost'
    user = 'root'
    database = 'cursos-plataforma'
    password = ''
    pool
    constructor(){
        this.pool = new mysql.createPool({
            host: this.host,
            user: this.user,
            database : this.database,
            password: this.password
        })
    }
}