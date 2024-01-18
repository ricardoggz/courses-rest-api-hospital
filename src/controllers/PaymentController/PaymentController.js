import { DatabaseModel } from "../../models/index.js"

const db = new DatabaseModel()

export const getPayments = (req, res)=>{
    db.pool.getConnection((err, conn)=>{
      if(err) throw new Error(err)
      conn.query(`
        SELECT
        pagos.course_id,
        pagos.student_id,
        student_name,
        student_age,
        student_email,
        student_phone,
        student_password,
        student_grade,
        student_institution,
        student_nationality,
        student_state,
        student_license,
        student_license_part_2,
        student_tax_data,
        course_name,
        payment_successfull,
        payment_amount,
        payment_reference,
        payment_invoice,
        payment_degree,
        payment_date,
        payment_grade
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
      INSERT INTO pagos (course_id, student_id, payment_successfull, payment_amount, payment_reference, payment_invoice, payment_date)
      VALUES (
        "${req.body.course_id}",
        "${req.body.student_id}",
        "${req.body.payment_successfull}",
        "${req.body.payment_amount}",
        "${req.body.payment_reference}",
        "${req.body.payment_invoice}",
        "${req.body.payment_date}"
      )
    `, (err, rows)=>{
      if(err) return res.satus(500).json(err)
      return res.json({
        message: 'Pago completado'
      })
    })
  })
}

export const editPayment = (req, res)=>{
  db.pool.getConnection((err, conn)=>{
    if(err) throw new Error(err)
    conn.query(`
      UPDATE pagos SET
      payment_degree =  "${req.body.payment_degree}"
      WHERE student_id = "${req.params.id}"
    `, (err, rows)=>{
      if(err) return res.satus(500).json(err)
      return res.json({
        message: 'Registro actualizado correctamente'
      })
    })
  })
}

export const editGrade = (req, res)=>{
  db.pool.getConnection((err, conn)=>{
    if(err) throw new Error(err)
    conn.query(`
      UPDATE pagos SET
      payment_grade =  "${req.body.payment_grade}"
      WHERE student_id = "${req.params.id}"
    `, (err, rows)=>{
      if(err) return res.satus(500).json(err)
      return res.json({
        message: 'Calificación actualizada correctamente'
      })
    })
  })
}