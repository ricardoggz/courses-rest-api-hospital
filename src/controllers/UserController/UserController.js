import bycript from 'bcryptjs'
import { DatabaseModel } from '../../models/index.js'


const db = new DatabaseModel()

export const userLogin = (req, res)=> {
  db.pool.getConnection((err, conn)=>{
      if(err) throw new Error(err)
      conn.query(
          `SELECT * FROM usuarios
           WHERE
           user_user = "${req.body.user_user}"
           AND
           user_password = "${req.body.user_password}"
          `,
          (err, rows)=> {
              !err ? res.json(rows) : res.json(err)
              conn.release()
          }
      )
  })
}
export const updateUser= (req, res)=> {
  db.pool.getConnection((err, conn)=>{
    const salt = bycript.genSaltSync()
    req.body.user_password = bycript.hashSync(req.body.user_password, salt)
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