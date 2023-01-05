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