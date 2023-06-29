import { DatabaseModel } from "../../models/index.js"

const db = new DatabaseModel()

export const getPayments = (req, res)=>{
    db.pool.getConnection((err, conn)=>{
      if(err) throw new Error(err)
      conn.query(`
        SELECT course_name, student_name, payment_successfull FROM pagos
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