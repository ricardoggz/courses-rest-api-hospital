import { DatabaseModel } from "../../models/index.js";

const db = new DatabaseModel()

export function getQuestionsOptions(req, res){
    db.pool.getConnection((err, conn)=>{
        if(err) return res.json(err)
        conn.query('SELECT * FROM opciones', (err, rows)=>{
            if(err) return res.json(err)
            return res.json(rows)
        })
    })
}

export function deleteQuestionOption(req, res){
    db.pool.getConnection((err, conn)=>{
        if(err) return res.json(err)
        conn.query(`
            DELETE FROM opciones WHERE option_id ="${req.body.option_id}"
        `, (err)=>{
            if(err) return res.json(err)
            return res.json({
                message: 'Opción eliminado correctamente'
            })
        })
    })
}

export function editQuestionOption (req, res){
    db.pool.getConnection((err, conn)=>{
        if(err) return res.json(err)
        conn.query(`
            UPDATE opciones SET
            option_name = "${req.body.option_name}",
            option_value = "${req.body.option_value}",
            question_id = "${req.body.question_id}"
            WHERE option_id = "${req.params.id}"
        `, (err)=>{
            if(err) return res.json(err)
            return res.json({
                message: 'Opción actualizado correctamente'
            })
        })
    })
}

export function addQuestionOption(req, res){
    db.pool.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(`
        INSERT INTO opciones(
            option_name,
            option_value,
            question_id
        )
        VALUES(
            "${req.body.option_name}",
            "${req.body.option_value}",
            "${req.body.question_id}",
        )
        `
        ,(err)=>{
            if(err) return res.json(err)
            conn.release()
            return res.json({message:'Opción agregada correctamente'})
        })
    })
}