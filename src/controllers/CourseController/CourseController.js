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
            course_zoom_video,
            course_zoom_id,
            course_zoom_password,
            course_url
        )
        VALUES(
            "${req.body.course_name}",
            "${!req.body.course_instructor ? null : req.body.course_instructor}"),
            "${!req.body.course_price ? null : req.body.course_price}",
            "${!req.body.course_place ? null : req.body.course_place}",
            "${!req.body.course_image ? null : req.body.course_image}",
            "${!req.body.course_pdf ? null : req.body.course_pdf}",
            "${!req.body.modality_id ? null : req.body.modality_id}",
            "${!req.body.course_start_date ? null : req.body.course_start_date}",
            "${!req.body.course_finish_date ? null : req.body.course_finish_date}",
            "${!req.body.month_id ? null : req.body.month_id}",
            NULL,
            "${!req.body.course_password? null : req.body.course_password}",
            "${!req.body.course_vimeo_folder ? null : req.body.course_vimeo_folder}",
            "${!req.body.course_live_video ? null : req.body.course_live_video}",
            "${!req.body.course_zoom_video ? null : req.body.course_zoom_video}",
            "${!req.body.course_zoom_id ? null : req.body.course_zoom_id}",
            "${!req.body.course_zoom_password ? null : req.body.course_zoom_password}",
            "${!req.body.course_password ? null : req.body.course_password}"
        )
        `
        ,(err)=>{
            if(err) return res.json(err)
            conn.release()
            return res.json({message:'Curso agregado correctamente'})
        })
    })
}