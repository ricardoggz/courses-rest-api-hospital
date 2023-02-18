import { DatabaseModel } from "../../models/index.js";

const db = new DatabaseModel()

export function getCourses(req, res){
    db.pool.getConnection((err, conn)=>{
        if(err) return res.json(err)
        conn.query('SELECT * FROM cursos ORDER BY course_start_date', (err, rows)=>{
            if(err) return res.json(err)
            return res.json(rows)
        })
    })
}