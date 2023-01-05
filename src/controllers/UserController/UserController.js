import { DatabaseModel } from '../../models/index.js'

const db = new DatabaseModel()
export function UserController(req, res){
  db.pool.getConnection((err, conn)=>{
    if(err) return res.json(err)
    conn.query('SELECT * FROM usuarios', (err, rows)=>{
        return res.json(rows)
    })
    conn.release()
  })  
}
export function userLogin(req, res){
  db.pool.getConnection((err, conn)=>{
    if(err) return res.json(err)
    conn.query('SELECT * FROM usuarios WHERE user_user=? AND user_password=?', [req.body.user_user, req.body.user_password], (err, rows)=>{
      if(err) return res.json(err)
      return res.json(rows)
    })
    conn.release()
  })
}