import { DatabaseModel } from "../../models/index.js"

const db = new DatabaseModel()

export const addQuestion = (req, res)=>{
    db.pool.getConnection((err, conn)=>{
      if(err) throw new Error(err)
      conn.query(`
        INSERT INTO preguntas(
            question_name,
            question_value, 
            course_id
        )
        VALUES (
          "${req.body.question_name}",
          "${req.body.question_value}",
          "${req.body.course_id}"
        )
      `, (err, rows)=>{
        if(err) return res.satus(500).json(err)
        return res.json({
          message: 'Pregunta agregada completamente'
        })
      })
    })
}

export const getQuestions = (req, res)=>{
    db.pool.getConnection((err, conn)=>{
      if(err) throw new Error(err)
      conn.query(`
        SELECT * FROM preguntas
      `, (err, rows)=>{
        if(err) return res.satus(500).json(err)
        return res.json(rows)
      })
  })
}
