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

export function deleteCourse(req, res){
    db.pool.getConnection((err, conn)=>{
        if(err) return res.json(err)
        conn.query(`
            DELETE FROM cursos WHERE course_id ="${req.body.course_id}"
        `, (err)=>{
            if(err) return res.json(err)
            return res.json({
                message: 'Curso eliminado correctamente'
            })
        })
    })
}

export function editCourse (req, res){
    db.pool.getConnection((err, conn)=>{
        if(err) return res.json(err)
        conn.query(`
            UPDATE cursos SET ?
            course_name = "${req.body.course_name}",
            course_instructor = "${req.body.course_instructor}",
            course_price = "${req.body.course_price}",
            course_place = "${req.body.course_place}",
            course_image = "${req.body.course_image}",
            course_pdf= "${req.body.course_pdf}",
            modality_id = "${req.body.modality_id}"
            WHERE course_id = "${req.params.id}"
        `, (err)=>{
            if(err) return res.json(err)
            return res.json({
                message: 'Curso actualizado correctamente'
            })
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