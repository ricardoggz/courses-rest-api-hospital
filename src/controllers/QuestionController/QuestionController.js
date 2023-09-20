import { DatabaseModel } from "../../models/index.js"

const db = new DatabaseModel()

export const addQuestion = (req, res)=>{
    db.pool.getConnection((err, conn)=>{
      if(err) throw new Error(err)
      conn.query(`
        INSERT INTO preguntas(
        question_id,
        question_name,
        test_id
        )
        VALUES(
          "${req.body.question_id}",
          "${req.body.question_name}",
          "${req.body.test_id}"
        )
      `, (err, rows)=>{
        if(err) return res.status(500).json(err)
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

export function editQuestion (req, res){
  db.pool.getConnection((err, conn)=>{
      if(err) return res.json(err)
      conn.query(`
          UPDATE preguntas SET
          question_name = "${req.body.question_name}",
          test_id = "${req.body.test_id}"
          WHERE question_id = "${req.params.id}"
      `, (err)=>{
          if(err) return res.json(err)
          return res.json({
              message: 'Pregunta actualizado correctamente'
          })
      })
  })
}

export function deleteQuestion(req, res){
  db.pool.getConnection((err, conn)=>{
      if(err) return res.json(err)
      conn.query(`
          DELETE FROM preguntas WHERE question_id ="${req.body.question_id}"
      `, (err)=>{
          if(err) return res.json(err)
          return res.json({
              message: 'Pregunta eliminado correctamente'
          })
      })
  })
}