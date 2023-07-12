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
            UPDATE cursos SET
            course_name = "${req.body.course_name}",
            course_instructor = "${req.body.course_instructor}",
            course_price = NULLIF("${req.body.course_price}", ""),
            course_place = NULLIF("${req.body.course_place}", ""),
            course_image = NULLIF("${req.body.course_image}", ""),
            course_pdf= NULLIF("${req.body.course_pdf}", ""),
            modality_id = NULLIF("${req.body.modality_id}", ""),
            course_start_date = "${req.body.course_start_date}",
            course_finish_date = "${req.body.course_finish_date}",
            month_id = "${req.body.month_id}",
            course_password = NULLIF("${req.body.course_password}", ""),
            course_vimeo_folder = NULLIF("${req.body.course_vimeo_folder}", ""),
            course_live_video = NULLIF("${req.body.course_live_video}", ""),
            course_url = NULLIF("${req.body.course_url}", "")
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
export function addCourse(req, res){
    db.pool.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(`
        INSERT INTO cursos(
            course_name,
            course_instructor,
            course_price,
            course_place,
            course_image,
            course_pdf,
            modality_id,
            course_start_date,
            course_finish_date,
            month_id,
            course_id,
            course_password,
            course_vimeo_folder,
            course_live_video,
            course_url
        )
        VALUES(
            "${req.body.course_name}",
            NULLIF("${req.body.course_instructor}", ""),
            NULLIF("${req.body.course_price}", ""),
            NULLIF("${req.body.course_place}", ""),
            NULLIF("${req.body.course_image}", ""),
            NULLIF("${req.body.course_pdf}", ""),
            NULLIF("${req.body.modality_id}", ""),
            "${req.body.course_start_date}",
            "${req.body.course_finish_date}",
            "${req.body.month_id}",
            NULL,
            NULLIF("${req.body.course_password}", ""),
            NULLIF("${req.body.course_vimeo_folder}", ""),
            NULLIF("${req.body.course_live_video}", ""),
            NULLIF("${req.body.course_url}", "")
        )
        `
        ,(err)=>{
            if(err) return res.json(err)
            conn.release()
            return res.json({message:'Curso agregado correctamente'})
        })
    })
}