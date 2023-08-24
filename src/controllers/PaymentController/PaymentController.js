import { DatabaseModel } from "../../models/index.js"

const db = new DatabaseModel()

export const getPayments = (req, res)=>{
    db.pool.getConnection((err, conn)=>{
      if(err) throw new Error(err)
      conn.query(`
        SELECT
        pagos.course_id,
        student_name,
        student_age,
        student_email,
        student_phone,
        student_password,
        student_grade,
        student_institution,
        course_name,
        payment_successfull,
        payment_reference
        FROM pagos
        INNER JOIN cursos
        ON pagos.course_id = cursos.course_id
        INNER JOIN estudiantes
        ON pagos.student_id = estudiantes.student_id
      `, (err, rows)=>{
        if(err) return res.satus(500).json(err)
        return res.json(rows)
      })
  })
}

export const addPayment = (req, res)=>{
  db.pool.getConnection((err, conn)=>{
    if(err) throw new Error(err)
    conn.query(`
      INSERT INTO pagos (course_id, student_id, payment_successfull, payment_reference)
      VALUES (
        "${req.body.course_id}",
        "${req.body.student_id}",
        "${req.body.payment_successfull}",
        "${req.body.payment_reference}"
      )
    `, (err, rows)=>{
      if(err) return res.satus(500).json(err)
      return res.json({
        message: 'Pago completado'
      })
    })
  })
}