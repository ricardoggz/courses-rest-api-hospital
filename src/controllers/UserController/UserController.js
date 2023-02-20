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
      `INSERT INTO estudiantes(
          student_name,
          student_grade,
          student_institution,
          student_work_position,
          student_phone,
          student_email,
          student_age,
          student_nationality
        )
        VALUES(
        "${req.body.student_name}",
        "${req.body.student_grade}",
        "${req.body.student_institution}",
        "${req.body.student_work_position}",
        "${req.body.student_phone}",
        "${req.body.student_email}",
        "${req.body.student_age}",
        "${req.body.student_nationality}"
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
          `UPDATE usuarios
           SET
           user_user = "${req.body.user_user}",
           user_name = "${req.body.user_name}",
           user_password = "${req.body.user_password}"
           WHERE user_user = "${req.params.id}"`,
          (err)=> {
              !err ? res.json({message: 'Datos actualizados con éxito'})
              :res.json(err)
              conn.release()
          }
      )
  })
}