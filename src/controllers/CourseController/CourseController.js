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

export const courseLogin = (req, res)=>{
    db.pool.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(`
        SELECT * FROM cursos
        WHERE course_password="${req.body.course_password}"
        `
        ,(err, rows)=>{
            if(err) return res.json(err)
            if(rows.length === 0 ) return res.json({
                message: 'Datos incorrectos',
                rows: null
            })
            conn.release()
            return res.json({message: 'Datos correctos', rows})
        })
    })
}