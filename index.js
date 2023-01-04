import express from "express"
import mysql from 'mysql'
const app = express()

const db  = mysql.createPool({
    host: 'localhost',
    database : 'cursos-plataforma',
    user: 'root',
    password: ''
})
app.use(express.json())
app.get('/', (req, res)=> {
     db.query("SELECT * FROM usuarios", (err, rows)=>{
        if(err){
            return res.json({
                message : 'Un error ha ocurrido',
                err
            })
        }else{
            return res.json(rows)
        }
     })
})
app.listen(3030)