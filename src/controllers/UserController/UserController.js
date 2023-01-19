import { DatabaseModel } from '../../models/index.js'
const db = new DatabaseModel()

export const getUsers = (req, res)=>{
  db.pool.getConnection((err, conn)=>{
    if(err) throw new Error(err)
    conn.query('SELECT * FROM usuarios', (err, rows)=>{
      if(err) return res.json(err)
      return res.json(rows)
    })
})
}
export const createUser = (req, res)=>{
  db.pool.getConnection((err, conn)=>{
    if(err) throw new Error(err)
    conn.query(
      `INSERT INTO usuarios
        (user_name, user_profession, user_institution, user_position, user_phone, user_age, user_email)
        VALUES(
        "${req.body.user_name}",
        "${req.body.user_profession}",
        "${req.body.user_institution}",
        "${req.body.user_position}",
        "${req.body.user_phone}",
        "${req.body.user_age}",
        "${req.body.user_email}"
        )`,
        (err, rows)=> {
          !err ? res.json(rows)
          :res.json(err)
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