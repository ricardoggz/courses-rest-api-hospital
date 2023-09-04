import { DatabaseModel } from '../../models/index.js'
const db = new DatabaseModel()

export const getUsers = (req, res)=>{
  db.pool.getConnection((err, conn)=>{
    if(err) throw new Error(err)
    conn.query('SELECT * FROM usuarios', (err, rows)=>{
      if(err) return res.satus(500).json(err)
      return res.json(rows)
    })
})
}
export const createUser = (req, res)=>{
  db.pool.getConnection((err, conn)=>{
    if(err) throw new Error(err)
    conn.query(
      `
      INSERT INTO estudiantes(
        student_id,
        student_name,
        student_age,
        student_nationality,
        student_state,
        student_grade,
        student_license,
        student_institution,
        student_phone,
        student_email,
        student_password,
        student_graduated,
        student_role
      )
        VALUES(
        "${req.body.student_id}",
        "${req.body.student_name}",
        "${req.body.student_age}",
        "${req.body.student_nationality}",
        "${req.body.student_state}",
        "${req.body.student_grade}",
        NULLIF("${req.body.student_license}", ""),
        "${req.body.student_institution}",
        "${req.body.student_phone}",
        "${req.body.student_email}",
        "${req.body.student_password}",
        "${req.body.student_graduated}",
        "${req.body.student_role}"
        )`,
        (err, rows)=> {
          !err ? res.json(rows)
          :res.status(400).json(err)
          conn.release()
        }
    )
  })
}
export const updateUser= (req, res)=> {
  db.pool.getConnection((err, conn)=>{
      if(err) throw new Error(err)
      conn.query(
          `UPDATE estudiantes
          SET
          student_name="${req.body.student_name}",
          student_age="${req.body.student_age}",
          student_nationality="${req.body.student_nationality}",
          student_state="${req.body.student_state}",
          student_grade="${req.body.student_grade}",
          student_institution="${req.body.student_institution}",
          student_phone="${req.body.student_phone}",
          student_email="${req.body.student_email}",
          student_password="${req.body.student_password}"
          WHERE student_id="${req.params.id}"`,
          (err)=> {
            !err ? res.json({message: 'Datos actualizados con éxito'})
            :res.json(err)
            conn.release()
          }
      )
  })
}
export const userLogin = (req, res)=>{
  db.pool.getConnection((err, conn)=>{
    if(err) throw new Error(err)
    conn.query(
      `
      SELECT * FROM estudiantes
      WHERE student_email ="${req.body.student_email}"
      AND student_password ="${req.body.student_password}" 
      `,
      (err, rows)=>{
        !err ? res.json({rows})
        :res.json(err)
        conn.release()
      }
    )
  })
}
export const updateTaxUserData = (req, res)=>{
  db.pool.getConnection((err, conn)=>{
    if(err) throw new Error(err)
    conn.query(
      `
      UPDATE estudiantes SET
      student_tax_data ="${req.body.student_tax_data}"
      WHERE student_id ="${req.params.id}"
      `,
      (err, rows)=>{
        !err ? res.json({rows})
        :res.json(err)
        conn.release()
      }
    )
  }) 
}